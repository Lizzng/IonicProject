import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// For login redirect
import {canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard' 

// Call function that will redirect the user to a specific route when
// they try to access a specific page using canActivate (below), in our case 'student'
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['student-login']);

const routes: Routes = [
  {
    path: '',
    // This is used to redirect unauthorised users to the login page
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./pages/student-list/student-list.module').then( m => m.StudentListPageModule)
  },
  {
    path: 'student',
    // This is used to redirect unauthorised users to the login page
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./pages/student-details/student-details.module').then( m => m.StudentDetailsPageModule)
  },
  {
    // This is a duplicate of the student route except it takes a studentID as a parameter when the route is activated.
    // The studentID in this case is actually the document ID from firebase and is used to update/delete the document
    // in the database. This is why we require AngularFirestoreCollectionn and DocumentReference in the student service 
    path: 'student/:studentID',
    // This is used to redirect unauthorised users to the login page
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./pages/student-details/student-details.module').then( m => m.StudentDetailsPageModule)
  },
  {
    path: 'student-login',
    loadChildren: () => import('./pages/student-login/student-login.module').then( m => m.StudentLoginPageModule)
  },
  {
    path: 'others',
    loadChildren: () => import('./others/others.module').then( m => m.OthersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
