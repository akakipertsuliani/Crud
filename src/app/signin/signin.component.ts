import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatRipple } from '@angular/material/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatRipple,
    CommonModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  loader: boolean = false;
  success: boolean = false;
  fail: boolean = false;
  signInForm: FormGroup;

  constructor(private router: Router, private auth: AuthService) {
    this.signInForm = new FormGroup({
      Email: new FormControl("", [Validators.required, Validators.email]),
      Password: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }

  get EmailError(): boolean {
    return !!((this.signInForm.get('Email')?.hasError('required') || this.signInForm.get('Email')?.hasError('email')) && this.signInForm.get('Email')?.touched);
  }

  get passwordError(): boolean {
    return !!((this.signInForm.get('Password')?.hasError('required') || this.signInForm.get('Password')?.hasError('minlength')) && this.signInForm.get('Password')?.touched);
  }

  signInUser() {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }

    const { Email, Password } = this.signInForm.value;
    this.loader = !this.loader;

    this.auth.signIn(Email, Password).then(() => {
      this.fail = false;
      this.success = !this.success;
      setTimeout(() => {
        this.loader = !this.loader;
        this.router.navigate(["/user"]);
      }, 2000)
    }).catch(() => {
      this.fail = !this.fail;
      setTimeout(() => {
        this.loader = !this.loader;
      }, 2000)
    })
  }

  goSignUp() {
    this.auth.setPosition('1');
  }
  
  goResetPassword() {
    this.auth.setPosition('2');
  }
}
