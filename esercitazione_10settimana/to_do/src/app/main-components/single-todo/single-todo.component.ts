import { iTodo } from './../../Models/todo';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrl: './single-todo.component.scss'
})
export class SingleTodoComponent {

  @Input() todo!:iTodo

}
