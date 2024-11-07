import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatRipple],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss'
})
export class ResetpasswordComponent {
  loader: boolean = false;
  success: boolean = false;
  fail: boolean = false;
  resetPasswordForm: FormGroup;

  constructor(private auth: AuthService) {
    this.resetPasswordForm = new FormGroup({
      Email: new FormControl("", [Validators.required, Validators.email]),
    })
  }

  get EmailError(): boolean {
    return !!((this.resetPasswordForm.get('Email')?.hasError('required') || this.resetPasswordForm.get('Email')?.hasError('email')) && this.resetPasswordForm.get('Email')?.touched);
  }

  resetPasswordRequest() {
    if (this.resetPasswordForm.invalid) {
      this.resetPasswordForm.markAllAsTouched();
      return;
    }

    const { Email } = this.resetPasswordForm.value;
    this.loader = !this.loader
    
    this.auth.resetPassword(Email).then(() => {
      this.success = !this.success;
      setTimeout(() => {
        this.success = !this.success;
        this.loader = !this.loader;
      }, 2000);
    }).catch(() => {
      this.fail = !this.fail;
      setTimeout(() => {
        this.fail = !this.fail;
        this.loader = !this.loader;
      }, 2000);
    })
  }

  goBack() {
    this.auth.setPosition('0');
  }
}
