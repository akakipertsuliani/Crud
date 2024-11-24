import { Component } from '@angular/core';
import { AuthModule } from '../../shared/auth.module';

@Component({
  selector: 'app-not-found',
  imports: [AuthModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
