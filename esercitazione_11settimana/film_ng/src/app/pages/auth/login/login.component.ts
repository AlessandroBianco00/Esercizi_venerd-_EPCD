import { Component } from '@angular/core';
import { iAuthData } from '../../../Models/authdata';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  //TUTTE LE PASSWORD UTENTE SONO: password

  authData:iAuthData = {
    email: '',
    password: ''
  }

  constructor(
    private authSvc:AuthService,
    private router:Router
  ){}

  login(){
    this.authSvc.login(this.authData)
    .subscribe(()=>{
      this.router.navigate(['/profile'])
    })
  }

}
