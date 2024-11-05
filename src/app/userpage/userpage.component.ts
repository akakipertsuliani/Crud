import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-userpage',
  standalone: true,
  imports: [],
  templateUrl: './userpage.component.html',
  styleUrl: './userpage.component.scss'
})
export class UserpageComponent {
  constructor(private router: Router, private auth: AuthService) {}

  singOutUser() {
    this.auth.signOut();
    this.router.navigate(["/"]);
  }

}