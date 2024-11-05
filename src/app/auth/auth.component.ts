import { Component } from '@angular/core';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [SigninComponent, SignupComponent, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  screenDivide: boolean = false;

  constructor(private auth: AuthService) {
    this.auth.position$.subscribe((data) => {
      this.screenDivide = data;
    })
  }
}
