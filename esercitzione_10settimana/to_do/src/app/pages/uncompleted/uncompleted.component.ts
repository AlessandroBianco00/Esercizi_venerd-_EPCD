import { Component } from '@angular/core';
import { iTodo } from '../../Models/todo';
import { iUser } from '../../Models/user';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-uncompleted',
  templateUrl: './uncompleted.component.html',
  styleUrl: './uncompleted.component.scss'
})
export class UncompletedComponent {

  todoArray:iTodo[] = []
  userArray:iUser[] = []

  constructor(
    private TodoSvc:TodoService,
    private UserSvc:UserService
   ){}

   ngOnInit() {
    this.todoArray = this.TodoSvc.uncompletedFilter()
    this.userArray = this.UserSvc.userArray
    this.todoArray = this.TodoSvc.addAuthor(this.todoArray, this.userArray)
   }
}
