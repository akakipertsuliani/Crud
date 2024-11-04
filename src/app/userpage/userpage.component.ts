import { Component, OnInit } from '@angular/core';
import { MainservisesService } from '../mainservises.service';
import { Router } from '@angular/router';
import { UsereditdataComponent } from './usereditdata/usereditdata.component';
import { UsernavigationComponent } from './usernavigation/usernavigation.component';

@Component({
  selector: 'app-userpage',
  standalone: true,
  imports: [UsereditdataComponent, UsernavigationComponent],
  templateUrl: './userpage.component.html',
  styleUrl: './userpage.component.scss'
})
export class UserpageComponent {

  data: any;
  
  public userList: Array<any> = [];

  constructor(private MainservisesService: MainservisesService, private router: Router) {}

  moveHome() {
    this.router.navigate(['/userpage']);
  }

}