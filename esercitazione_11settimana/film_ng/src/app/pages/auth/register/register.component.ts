import { Component } from '@angular/core';
import { iUser } from '../../../Models/user';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  newUser:Partial<iUser> = {}

  constructor(
    private authSvc:AuthService,
    private router:Router
  ){}

  register(){
    this.authSvc.register(this.newUser)
    .subscribe(()=>{
      swal("Good job!", "Regstration was successfull", "success");
      setTimeout(() => {this.router.navigate(['/auth/login'])}, 1000)
    })
  }
}
