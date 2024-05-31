import { iUser } from './../../Models/user';
import { iTodo } from './../../Models/todo';
import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  todoArray:iTodo[] = []
  userArray:iUser[] = []
  searchTerm: string = ''

  constructor(
    private TodoSvc:TodoService,
    private UserSvc:UserService
  ){}

  ngOnInit() {
    this.todoArray = this.TodoSvc.todoArray
    this.userArray = this.UserSvc.userArray
    this.completeArray()
    console.log(this.todoArray)
  }

  searchAuthor(value:string) {
    this.completeArray()
    if (value) {
      this.todoArray = this.TodoSvc.todoArray.filter(todo => {
        let authorName:string = `${todo.author?.firstName} ${todo.author?.lastName}`.toLowerCase()
        if(authorName.includes(value.toLowerCase())) {
          return todo
        } else {
          return undefined
        }
      })
    }
  }

  completeArray():void {
    this.todoArray = this.TodoSvc.addAuthor(this.TodoSvc.todoArray, this.userArray)
  }

}
