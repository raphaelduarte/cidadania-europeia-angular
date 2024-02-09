import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-aplication',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './aplication.component.html',
  styleUrl: './aplication.component.css'
})
export class AplicationComponent {

}
