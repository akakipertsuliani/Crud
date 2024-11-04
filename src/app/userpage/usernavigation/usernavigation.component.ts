import { Component } from '@angular/core';
import { MainservisesService } from '../../mainservises.service';

@Component({
  selector: 'app-usernavigation',
  standalone: true,
  imports: [],
  templateUrl: './usernavigation.component.html',
  styleUrl: './usernavigation.component.scss'
})
export class UsernavigationComponent {
  userName: string = "";

  constructor(private mainService: MainservisesService){
    this.mainService.getUsers().subscribe(data => {
      this.userName = data[data.length-1].Username;
    })
  }

}
