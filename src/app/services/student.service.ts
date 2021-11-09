import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from "@angular/fire/storage";

// Needed to create reference to cloud stotage and make url 
import { AngularFireStorageReference } from '@angular/fire/storage';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
//import { AngularFireAuthGuard} from '@angular/fire/auth-guard';
import { AngularFireAuth } from '@angular/fire/auth';


// Modify interface to include imageURL (firebase URL),
// imageFilename (needed for deleting the file from firebase)
// and createdAt (timeStamp)
export interface Student{
  studentID?: string,
  firstName: string,
  lastName: string,
  moduleNo1: string,
  moduleNo2: string,
  courseID: string,
  imageURL: string,
  imageFilename: string,
  createdBy: string,
  createdAt?: firebase.firestore.FieldValue;
}

// Interafce for Login
export interface User{
  uid:string,
  email: String
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // Reference to students Observable
  private students: Observable<Student[]>;
  // Reference to the studentCollection for Update/Delete Operations
  private studentCollection: AngularFirestoreCollection<Student>;
  // Current Logged in User
  currentUser: User = null;

 
  constructor(private storage: AngularFireStorage, private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    // Get a refence to the students collection
    this.studentCollection = this.afs.collection<Student>('students-3');
    // Could do this also to filter data based on the CreatedBy ID
    //this.studentCollection = this.afs.collection<Student>('students-3', ref => ref.where("createdBy", "==", `${this.currentUser.uid}`));
    
    // Get a refernce to a snapshot of the student collection data, i.e an observable that
    // provides the actual array of students when subscribed to (emits the values!)
    this.students = this.studentCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const studentID = a.payload.doc.id;
          // Use spread operator (...) to include studentID
          // in the returned data object
          return { studentID, ...data };
        });
      })
    );

    // Check Login Status
    this.afAuth.onAuthStateChanged(user => {
      console.log("user changed:", user);
      this.currentUser = user;
    });
  }
 
  // Get all students from service
  getStudents(): Observable<Student[]> {
    return this.students;
  }
 
  // This studentID refers to the id in Firebase, needed to update or delete
  getStudent(studentID: string): Observable<Student> {
    return this.studentCollection.doc<Student>(studentID).valueChanges().pipe(
      take(1),
      map(student => {
        student.studentID = studentID;
        return student
      })
    );
  }
 
  // addStudent(student: Student): Promise<DocumentReference> {
  //   return this.studentCollection.add(student);
  // }


    addStudent(student: Student) {

    // Name for image captured. This uses template literals to embed the date 
    // and use the text and append it to Dummy. Ensure to use ` instead of '
    // to ensure it works. We will also add the imageFilename for deletion purposes
    let imageFilename = `${new Date().getTime()}-ProfilePic.png`;
    //let storageRef: AngularFireStorageReference = this.storage.ref(`/students/${imageFilename}`);
    let storageRef = firebase.storage().ref(`/students/${imageFilename}`);

    console.log("StorageRef" + storageRef);
    console.log("ImageFileName" + imageFilename);

    // Upload the raw base64 encoded string to storage using putString
    const storageObs = from(storageRef.putString(student.imageURL, "base64", { contentType: 'image/png' }));

    // Generate a URL for storing in the FireStore. This is used to display the image going forward
    // This code creates an Observable which is then converted into a promise in order to extract
    // the URL and then store it in the Firsestore imageURL field.
    return storageObs.pipe(
      switchMap(obj => {
        console.log("Got File Download URL Promise");
        return obj.ref.getDownloadURL();
      }),
      switchMap(url => {
        console.log("Got File Download URL");
        // Update student object with url, timetamp, imagefilename (for deletion) and creator (for filtering from DB, not done yet)
        student.imageURL = url;
        student.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        student.imageFilename = imageFilename;
        student.createdBy = this.currentUser.uid;
        return this.studentCollection.add(student);
      })
    )
  }

  // updateStudent(student: Student): Promise<void> {
  //   return this.studentCollection.doc(student.studentID).update({ firstName: student.firstName, lastName: student.lastName, moduleNo1: student.moduleNo1, moduleNo2: student.moduleNo2, courseID: student.courseID });
  // }

  updateStudent(student: Student) {

    // Name for New updated image captured. This uses template literals to embed the date 
    // and use the text and append it to Dummy. Ensure to use ` instead of '
    // to ensure it works
    let imageFilename = `${new Date().getTime()}-UpdatedProfilePic.png`;
    
    // Get a storage reference for the new file that will be uploaded in place of
    // the existing one. We will replace the old one and delete it
    let storageRef = firebase.storage().ref(`/students/${imageFilename}`);

    // Delete old file from File Storage
    this.deleteFile(student.imageFilename);

    // Generate a URL for storing in the FireStore. This is used to display the image going forward
    // This code creates an Observable which is then converted into a promise in order to extract
    // the URL and then store it in the Firsestore imageURL field. 
    const storageObs = from(storageRef.putString(student.imageURL, "base64", { contentType: 'image/png' }));

    return storageObs.pipe(
      switchMap(obj => {
        console.log("Got File Download URL Promise");
        return obj.ref.getDownloadURL();
      }),
      switchMap(url => {
        console.log("Got File Download URL");
        student.imageURL = url;
        student.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        student.imageFilename = imageFilename;
        return this.studentCollection.doc(student.studentID).update(student);
      })
    )
  }

  
 
  deleteStudent(student: Student): Promise<void> {

    // Delete the file in Firebase Storage First
    this.deleteFile(student.imageFilename);

    // Delete record from Firebase Firestore using studentID
    return this.studentCollection.doc(student.studentID).delete();

  }

  // Method for deleting a file from Firebase File Storage using
  // the fileName from the FireStore record
  deleteFile(fileName: string){

    // Get a reference to file stored in the Firebase Storage bucket 
    //let storageRef = firebase.storage().ref().child(`students/${fileName}`);
    let storageRef = firebase.storage().ref(`/students/${fileName}`);

    // Delete the file
    storageRef.delete().then(() => {
      // File deleted successfully
      console.log("File deleted successfully");
    }).catch((error) => {
      // Uh-oh, an error occurred!
      console.log("Error: File NOT deleted");
    });
  }

  // Sign-in method
  signIn({email, password}){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Sign-out method
  signOut() {
    return this.afAuth.signOut();
  }

  // Signup for a new accounnt using Angular Fire Auth
  async signUp({email, password}){

    // Create a user using username and passsord
    const credential  = await this.afAuth.createUserWithEmailAndPassword(email, password);

    // Collect user ID for storage
    const uid = credential.user.uid;
    // Store is Firsetore
    return this.afs.doc(`users/${uid}`).set({uid, email: credential.user.email})

  }

}
