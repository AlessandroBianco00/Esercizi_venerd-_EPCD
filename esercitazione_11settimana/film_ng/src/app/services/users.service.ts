import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iUser } from '../Models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl:string = 'http://localhost:3000/users'

  constructor(
    private http:HttpClient,
    private AuthSvc:AuthService
  ) { }

  getAllUsers(){
    return this.http.get<iUser[]>(this.usersUrl)
  }

  getUserById(id:number){
    return this.http.get<iUser>(`${this.usersUrl}/${id}`)
  }

  getCurrentUserId():number {
    const accessData = this.AuthSvc.getAccessData()

    if(!accessData) return 0

    return accessData.user.id

  }
}
