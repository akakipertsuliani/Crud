import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatRipple } from '@angular/material/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatRipple
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  loader: boolean = false;
  success: boolean = false;
  fail: boolean = false;
  signUpForm: FormGroup;

  constructor(private router: Router, private registration: AuthService) {
    this.signUpForm = new FormGroup({
      Username: new FormControl("", [Validators.required, Validators.minLength(4)]),
      Email: new FormControl("", [Validators.required, Validators.email]),
      Password: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }

  get UsernameError(): boolean {
    return !!((this.signUpForm.get('Username')?.hasError('required') || this.signUpForm.get('Username')?.hasError('minlength')) && this.signUpForm.get('Username')?.touched);
  }

  get EmailError(): boolean {
    return !!((this.signUpForm.get('Email')?.hasError('required') || this.signUpForm.get('Email')?.hasError('email')) && this.signUpForm.get('Email')?.touched);
  }

  get passwordError(): boolean {
    return !!((this.signUpForm.get('Password')?.hasError('required') || this.signUpForm.get('Password')?.hasError('minlength')) && this.signUpForm.get('Password')?.touched);
  }

  signUpUser() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    const { Username, Email, Password } = this.signUpForm.value;
    this.loader = !this.loader;
    
    if (this.signUpForm.valid) {
      this.registration.signUp(Username, Email, Password).then(() => {
        this.fail = !this.fail;
        this.success = !this.success;
        setTimeout(() => {
          this.loader = !this.loader;
          this.router.navigate(["/dashboard"]);
        }, 2000)
      }).catch(() => {
        this.fail = !this.fail;
        setTimeout(() => {
          this.loader = !this.loader;
        }, 2000)
       
      });
    }
  }

  goSignIn() {
    this.registration.setPosition('0');
  }
}
