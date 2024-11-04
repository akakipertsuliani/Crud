import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatRipple } from '@angular/material/core';

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
  singInForm: FormGroup;

  constructor() {
    this.singInForm = new FormGroup({
      Email: new FormControl("", [Validators.required, Validators.email]),
      Password: new FormControl("", [Validators.required, Validators.minLength(4)])
    })
  }

  get EmailError(): boolean {
    return !!((this.singInForm.get('Email')?.hasError('required') || this.singInForm.get('Email')?.hasError('email')) && this.singInForm.get('Email')?.touched);
  }

  get passwordError(): boolean {
    return !!((this.singInForm.get('Password')?.hasError('required') || this.singInForm.get('Password')?.hasError('minlength')) && this.singInForm.get('Password')?.touched);
  }

}
