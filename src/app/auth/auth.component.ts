import { Component } from '@angular/core';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [SigninComponent, SignupComponent, ResetpasswordComponent, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  screenDivide: string = '0';

  constructor(private auth: AuthService) {
    this.auth.position$.subscribe((data) => {
      this.screenDivide = data;
    })
  }
}
