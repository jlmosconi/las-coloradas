import { AuthModalComponent } from './auth-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule
  } from '@angular/material';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [AuthModalComponent]
})
export class AuthModalModule { }