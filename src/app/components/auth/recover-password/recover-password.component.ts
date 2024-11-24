import { Component, OnInit } from '@angular/core';
import { AuthModule } from '../../../shared/auth.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recover-password',
  imports: [AuthModule],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss'
})
export class RecoverPasswordComponent implements OnInit {

  constructor(private title: Title) {}

  ngOnInit(): void {
      this.title.setTitle("Recover Password")
  }
}
