import { Component } from '@angular/core';
import { iTodo } from '../../Models/todo';
import { iUser } from '../../Models/user';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {

  todoArray:iTodo[] = []
  userArray:iUser[] = []

  constructor(
    private TodoSvc:TodoService,
    private UserSvc:UserService
   ){}

   ngOnInit() {
    this.todoArray = this.TodoSvc.completedFilter()
    this.userArray = this.UserSvc.userArray
    this.todoArray = this.TodoSvc.addAuthor(this.todoArray, this.userArray)
   }
}
