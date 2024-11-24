import { Component, OnInit } from '@angular/core';
import { AuthModule } from '../../../shared/auth.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-in',
  imports: [AuthModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {

  constructor(private title: Title) {}

  ngOnInit(): void {
      this.title.setTitle("Log in");
  }
}
