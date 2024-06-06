import { Component } from '@angular/core';
import { iTodo } from '../../Models/todo';
import { iUser } from '../../Models/user';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  todoArray:iTodo[] = []
  userArray:iUser[] = []

  constructor(
    private TodoSvc:TodoService,
    private UserSvc:UserService
   ){}

   ngOnInit() {
    this.todoArray = this.TodoSvc.todoArray
    this.userArray = this.UserSvc.userArray
    this.todoArray = this.TodoSvc.addAuthor(this.todoArray, this.userArray)
    this.userArray = this.UserSvc.addTodos(this.todoArray)
    console.log(this.userArray)
   }

}
