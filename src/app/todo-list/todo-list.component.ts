import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todoitems: TodoItem[] ;

  constructor(private todoService: TodoService){}
  ngOnInit(): void {
    this.todoService.getTodoList()
    .subscribe( data => {
      this.todoitems = data;
    });
  }
}
