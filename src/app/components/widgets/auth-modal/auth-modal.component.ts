import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-auth-modal',
  template: `
	<div class="modal-container justify-content-center">
		<button mat-icon-button mat-dialog-close class="mb-2">
			<mat-icon>clear</mat-icon>
		</button>
		<div *ngIf="modalType === 'login'">
			<div>
				<button mat-button class="w-100 btn-facebook mb-2" [mat-dialog-close]="loginWithFacebook()">
					<div class="d-flex justify-content-center align-items-center">
						<svg viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" style="fill: currentcolor; height: 16px; width: 16px;" class="mr-2"><path fill-rule="evenodd" d="M8 14.408v-4.165c0-.424.35-.812.77-.812h2.519V7.347c0-4.84 2.484-7.311 7.42-7.347 1.645 0 3.219.212 4.692.636.455.141.63.424.595.883l-.56 4.062c-.035.178-.14.354-.315.531-.21.105-.42.176-.63.14-.875-.247-1.784-.352-2.799-.352-1.399 0-1.61.283-1.61 1.73v1.8H22.6c.42 0 .805.423.805.883l-.349 4.17c0 .422-.35.705-.77.705H18.08v16c0 .424-.349.812-.769.812h-5.213c-.42 0-.804-.388-.804-.812V15.185h-2.52A.781.781 0 0 1 8 14.408"></path></svg>
						Acceder con Facebook
					</div>
				</button>
				<button mat-button class="w-100 btn-google" [mat-dialog-close]="loginWithGoogle()">
					<div class="d-flex justify-content-center align-items-center">
					<svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height: 16px; width: 16px;" class="mr-2"><g fill="none" fill-rule="evenodd"><path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path><path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path><path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path><path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path><path d="M0 0h18v18H0V0z"></path></g></svg>
						Acceder con Google
					</div>
				</button>
			</div>

			<div class="my-3">
				<div class="o-hidden text-center">
					<span class="or">
						<span>o</span>
					</span>
				</div>
			</div>

			<div>
				<form novalidate [formGroup]="auth" (ngSubmit)="dialogRef.close(loginWithEmail());">

				
					<mat-form-field class="w-100">
						<input matInput type="email" mdInput placeholder="Direacción de correo electrónico" formControlName="email">
						<mat-icon matSuffix>mail_outline</mat-icon>
						<mat-error *ngIf="auth.controls.email.invalid">{{getEmailErrorMessage()}}</mat-error>
					</mat-form-field>

					<mat-form-field class="w-100">
						<input matInput type="password" mdInput placeholder="Constraseña" formControlName="password">
						<mat-icon matSuffix>lock_outline</mat-icon>
						<mat-error *ngIf="auth.controls.password.invalid">{{getPasswordErrorMessage()}}</mat-error>
					</mat-form-field>

					<button type="submit" mat-button mat-raised-button class="w-100" color="primary" [disabled]="auth.invalid || loading">
						Acceder
					</button>
				</form>
			</div>
		</div>

		<div *ngIf="modalType === 'password'">
			<form novalidate [formGroup]="auth" (ngSubmit)="dialogRef.close(password());">

			<mat-form-field class="w-100">
				<input type="email" mdInput placeholder="Direacción de correo electrónico" formControlName="email">
				<mat-icon matSuffix>mail_outline</mat-icon>
				<mat-error *ngIf="auth.controls.email.invalid">{{getEmailErrorMessage()}}</mat-error>
			</mat-form-field>

			<mat-form-field class="w-100">
				<input type="password" mdInput placeholder="Constraseña" formControlName="password">
				<mat-icon matSuffix>lock_outline</mat-icon>
				<mat-error *ngIf="auth.controls.password.invalid">{{getPasswordErrorMessage()}}</mat-error>
			</mat-form-field>

			<button type="submit" mat-raised-button color="primary" class="w-100" [disabled]="auth.invalid || loading">
				Acceder
			</button>
		</form>
		</div>
	</div>
  `,
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent {
  auth = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required, Validators.minLength(6)]],
  });
	modalType: string;
	pendingCred: string;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AuthModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
		this.modalType = this.data.type;
		this.auth.controls.email.setValue(this.data.email);
		this.pendingCred = this.data.pendingCred;
	}
	
	loginWithEmail() {
    return {
      type: 'EmailLogin',
      data: this.auth.value
		};
  }

  loginWithFacebook() {
    return {
			type : 'SocialLogin',
			data: 'facebook.com'
    };
  }

  loginWithGoogle() {
    return {
			type: 'SocialLogin',
			data: 'google.com'
    };
	}

	password() {
		return {
			type: 'password',
			data: {
				authValue: this.auth.value,
				pendingCred: this.pendingCred
			}
		}
	}
	
	getEmailErrorMessage() {
		let email = this.auth.controls.email;
    return email.hasError('required') ? 'Campo requerido' :
        email.hasError('email') ? 'No es un correo electrónico válido' :
      '';
	}
	
	getPasswordErrorMessage() {
		let password = this.auth.controls.password;
    return password.hasError('required') ? 'Campo requerido' :
			password.hasError('minlength') ? 'Ingrese al menos 6 caracteres' :
      '';
  }
}
