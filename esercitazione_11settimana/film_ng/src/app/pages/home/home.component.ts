import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private AuthSvc:AuthService) {

  }

  syncIsLoggedIn:boolean = this.AuthSvc.syncIsLoggedIn

}
