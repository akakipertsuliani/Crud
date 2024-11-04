import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatRipple } from '@angular/material/core';

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
  singUpForm: FormGroup;

  constructor() {
    this.singUpForm = new FormGroup({
      Username: new FormControl("", [Validators.required, Validators.minLength(4)]),
      Email: new FormControl("", [Validators.required, Validators.email]),
      Password: new FormControl("", [Validators.required, Validators.minLength(4)])
    })
  }

  get UsernameError(): boolean {
    return !!((this.singUpForm.get('Username')?.hasError('required') || this.singUpForm.get('Username')?.hasError('minlength')) && this.singUpForm.get('Email')?.touched);
  }
  get EmailError(): boolean {
    return !!((this.singUpForm.get('Email')?.hasError('required') || this.singUpForm.get('Email')?.hasError('email')) && this.singUpForm.get('Email')?.touched);
  }

  get passwordError(): boolean {
    return !!((this.singUpForm.get('Password')?.hasError('required') || this.singUpForm.get('Password')?.hasError('minlength')) && this.singUpForm.get('Password')?.touched);
  }
}
