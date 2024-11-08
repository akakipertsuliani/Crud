import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

@Component({
  selector: 'app-userpage',
  standalone: true,
  imports: [CommonModule, AdmindashboardComponent],
  templateUrl: './userpage.component.html',
  styleUrl: './userpage.component.scss',
})
export class UserpageComponent {
}
