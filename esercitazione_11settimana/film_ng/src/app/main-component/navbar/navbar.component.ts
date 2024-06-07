import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  show:boolean = false
  //isLogged:boolean = false

  constructor(private AuthSvc:AuthService) {}

  isLoggedIn = this.AuthSvc.syncIsLoggedIn

  ngOnInit() {
    this.AuthSvc.isLoggedIn$
    .subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn )
  }

  logout() {
    this.AuthSvc.logout()
  }

}
