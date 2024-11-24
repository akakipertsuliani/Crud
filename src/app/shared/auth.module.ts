import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterLink,
    MatRippleModule
  ],
  exports: [
    CommonModule,
    RouterLink,
    MatRippleModule
  ]
})
export class AuthModule { }
