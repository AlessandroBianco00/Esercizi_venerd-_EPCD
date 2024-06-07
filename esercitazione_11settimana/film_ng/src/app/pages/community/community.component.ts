import { Component } from '@angular/core';
import { iUser } from '../../Models/user';
import { UserService } from '../../services/users.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {

  usersArray:iUser[] = []

  constructor(
    private UserSvc:UserService,
  ) {}

  ngOnInit() {
    this.UserSvc.getAllUsers().subscribe(users => {
      this.usersArray = users.filter(user => user.id !== this.UserSvc.getCurrentUserId())
    })
  }

}
