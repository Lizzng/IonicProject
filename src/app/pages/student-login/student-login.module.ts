import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentLoginPageRoutingModule } from './student-login-routing.module';

import { StudentLoginPage } from './student-login.page';

// Required for Login Form to work
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentLoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [StudentLoginPage]
})
export class StudentLoginPageModule {}
