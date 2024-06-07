import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { iUser } from '../Models/user';
import { iAuthResponse } from '../Models/authresponse';
import { iAuthData } from '../Models/authdata';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper:JwtHelperService = new JwtHelperService()

  authSubject = new BehaviorSubject<null|iUser>(null)
  user$ = this.authSubject.asObservable()

  syncIsLoggedIn:boolean = false;

  isLoggedIn$ = this.user$.pipe(
    map(user => !!user),
    tap(user => this.syncIsLoggedIn = user)
  )

  constructor(
    private router:Router,
    private http:HttpClient
  ) {
    this.restoreUser()
  }

  loginUrl:string = 'http://localhost:3000/login'
  registerUrl:string = 'http://localhost:3000/register'

  register(newUser:Partial<iUser>) {
    return this.http.post<iAuthResponse>(this.registerUrl, newUser)
  }

  login(credentials:iAuthData) {
    return this.http.post<iAuthResponse>(this.loginUrl, credentials).pipe(tap(data => {
      this.authSubject.next(data.user)
      localStorage.setItem('currentUser', JSON.stringify(data))

      this.autoLogout()
    }))
  }

  logout():void {
    this.authSubject.next(null)
    localStorage.removeItem('currentUser')

    this.router.navigate(['/auth/login'])
  }

  getAccessData():iAuthResponse|null {
    const jsonData = localStorage.getItem('currentUser')

    if(!jsonData) return null

    const accessData:iAuthResponse = JSON.parse(jsonData)
    return accessData
  }

  autoLogout():void {
    const accessData = this.getAccessData()

    if(!accessData) return

    const expDate = this.jwtHelper.getTokenExpirationDate(accessData.accessToken) as Date

    const expMs = expDate.getTime() - new Date().getTime()

    setTimeout(this.logout,expMs)
  }

  restoreUser():void {
    const accessData = this.getAccessData()

    if(!accessData) return
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return

    this.authSubject.next(accessData.user)

    this.autoLogout()
  }

}
