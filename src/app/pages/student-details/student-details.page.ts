import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from 'src/app/services/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController} from '@ionic/angular';
// These are needed for launching the camera and taking photo
// ensure to have Capacitor Core installed, $ ionic integrations enable capacitor
import { Plugins, CameraResultType, CameraSource} from '@capacitor/core';
const {Camera}  = Plugins;

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.page.html',
  styleUrls: ['./student-details.page.scss'],
})
export class StudentDetailsPage implements OnInit {
  // Create empty student object to provide
  // functions with data from the form
  student: Student = {
    firstName: '',
    lastName: '',
    moduleNo1: '',
    moduleNo2: '',
    courseID: '',
    imageURL: null,
    imageFilename: null,
    createdBy: null,
    createdAt: null
  };

  capturedImage = null;
  updateImage = false;
 
  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService,
    private toastCtrl: ToastController, private router: Router) { }
 
  ngOnInit() { }
 
  ionViewWillEnter() {
    let studentID = this.activatedRoute.snapshot.paramMap.get('studentID');
    console.log(studentID);
    if (studentID) {
      console.log(studentID);
      this.studentService.getStudent(studentID).subscribe(student => {
        this.student = student;
        console.log("The URL is " + this.student.imageURL);
        console.log("The Image fileName " + this.student.imageFilename);
        this.updateImage = true;
      });
    }
  }

  async addImage(){
    const image = await Camera.getPhoto(
      {
        quality: 100,
        allowEditing: true,
        source: CameraSource.Photos,
        resultType: CameraResultType.Base64
      }
    );
    console.log("result" , image);
    // To display inside the browser we need to prepend 'data:image/jpeg;base64',
    this.capturedImage = `data:image/jpeg;base64,${image.base64String}`;
    // To post to firebase we just need to do this
    this.student.imageURL = image.base64String;
    // Used to determine if the image is being
    // captured initially or as part of an update operation
    this.updateImage = false;
  }
 
  addStudent() {
    // Changed to subscribe instead of then because of changes in the
    // service promise/observable structure
    this.studentService.addStudent(this.student).subscribe(() => {
      this.router.navigateByUrl('/');
      this.showToast('Student added');
    }, err => {
      this.showToast('There was a problem adding your student');
    });
  }
 
  deleteStudent() {

    this.studentService.deleteStudent(this.student).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Student deleted');
    }, err => {
      this.showToast('There was a problem deleting your student');
    });
  }
 
  updateStudent() {
    this.studentService.updateStudent(this.student).subscribe(() => {
      this.showToast('Student updated');
    }, err => {
      this.showToast('There was a problem updating your student');
    });
  }
 
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}