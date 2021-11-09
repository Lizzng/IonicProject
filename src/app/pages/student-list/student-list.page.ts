import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from '../../services/student.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {
  // Create students property of type Observable
  students: Observable<Student[]>;
  // Inject the StudentService into the Constructor
  constructor(private studentService: StudentService,
    private router: Router) {  }

  ngOnInit() {
    // Call the getStudents() function in the StudentService and
    // assign the Observable to the students property
    this.students = this.studentService.getStudents();
  }

  // Call studentservice signout function
  signOut(){
    this.studentService.signOut();
  }
  gotoOthers(){
    this.router.navigateByUrl('/others');
  }
  
}
