import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-additionalinfo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatRipple],
  templateUrl: './additionalinfo.component.html',
  styleUrl: './additionalinfo.component.scss'
})
export class AdditionalinfoComponent {
  loader: boolean = false;
  success: boolean = false;
  fail: boolean = false;
  additionalInfoFrom: FormGroup;

  constructor() {
    this.additionalInfoFrom = new FormGroup({
      Name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      Surname: new FormControl("", [Validators.required, Validators.minLength(2)]),
      Birthday: new FormControl("", Validators.required),
      Role: new FormControl("", Validators.required),
    })
  }

  get nameError(): boolean {
    return !!((this.additionalInfoFrom.get('Name')?.hasError('required') || this.additionalInfoFrom.get('Name')?.hasError('minlength')) && this.additionalInfoFrom.get('Name')?.touched);
  }

  get surnameError(): boolean {
    return !!((this.additionalInfoFrom.get('Surname')?.hasError('required') || this.additionalInfoFrom.get('Surname')?.hasError('minlength')) && this.additionalInfoFrom.get('Surname')?.touched);
  }

  get birthdayError(): boolean {
    return !!((this.additionalInfoFrom.get('Birthday')?.hasError('required') || this.additionalInfoFrom.get('Birthday')?.touched));
  }

  get roleError(): boolean {
    return !!((this.additionalInfoFrom.get('Role')?.hasError('required') || this.additionalInfoFrom.get('Role')?.touched));
  }

  addAdditionalInfo() {
    if (this.additionalInfoFrom.invalid) {
      this.fail = !this.fail;
      return;
    }
  }

  Cancel() {}
}
