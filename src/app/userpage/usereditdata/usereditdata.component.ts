import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainservisesService } from '../../mainservises.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-usereditdata',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './usereditdata.component.html',
  styleUrl: './usereditdata.component.scss'
})
export class UsereditdataComponent {
  userGetData: FormGroup = new FormGroup({
    Name: new FormControl({ value: "", disabled: true, }, Validators.required),
    Surname: new FormControl({ value: "", disabled: true, }, Validators.required),
    Username: new FormControl({ value: "", disabled: true, }, Validators.required),
    Email: new FormControl({ value: "", disabled: true, }, [Validators.required, Validators.email]),
    PhoneNumber: new FormControl({ value: "", disabled: true, }, Validators.required)
  });

  public id: any;
  public moveData: any;
  public isDisabled: boolean = true;
  public userData: any = {};

  constructor(private router: Router, private mainService: MainservisesService) {
    this.mainService.getUsers().subscribe(data => {
      this.moveData = data;
      this.id = data.length;
      this.userGetData.setValue({
        Name: this.moveData[this.id - 1].Name,
        Surname: this.moveData[this.id - 1].Surname,
        Username: this.moveData[this.id - 1].Username,
        Email: this.moveData[this.id - 1].Email,
        PhoneNumber: this.moveData[this.id - 1].PhoneNumber
      });
    })
  }

  turnOnEditData() {
    this.isDisabled = false;
    this.userGetData.enable();
  }

  editData() {
    const isValid = this.userGetData.valid;

    if (isValid) {
      this.mainService.updateUser(this.id, this.userGetData.value).subscribe({
        next: (val: any) => {
          this.isDisabled = true;
          this.userGetData.disable();
        }, error: (err: any) => {
          console.error(err);
        }
      })
    } else {
      this.userGetData.markAllAsTouched();
    }
  }


  logOut() {
    this.router.navigate(['/']);
  }
}
