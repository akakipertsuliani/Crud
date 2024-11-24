import { Component, OnInit } from '@angular/core';
import { AuthModule } from '../../../shared/auth.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-up',
  imports: [AuthModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  Day: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  Month: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  Year: number[] = Array.from({ length: 2015 - 1930 + 1 }, (_, i) => 2015 - i);
  Role: string[] = ["Student", "Teacher"];
  Grade: string[] = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]

  constructor(private title: Title) {}

  ngOnInit(): void {
      this.title.setTitle("Sign Up");
  }
}
