import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthService } from '../../service/auth.service';
import { userDataInter } from '../../interface/userdata';
import { FirestoreService } from '../../service/firestore.service';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.scss'
})
export class AdmindashboardComponent {
  userData: any;
  roomUsersData: userDataInter[] = [];

  constructor(private firestore: FirestoreService, private auth: AuthService) {
    this.auth.getUserData().subscribe((user) => {
      this.firestore.getUserDataFromRoom(user["uid"]).then((data) => {
        this.roomUsersData = data.docs.map(doc => doc.data() as userDataInter);
      })
    })
  }

  get teacherCount(): number {
    return this.roomUsersData.filter((items) => items.Role === "Teacher").length
  }
  get studentCount(): number {
    return this.roomUsersData.filter((items) => items.Role === "Student").length
  }
  get activeCount(): number {
    return this.roomUsersData.filter((items) => items.Status === true).length
  }
}
