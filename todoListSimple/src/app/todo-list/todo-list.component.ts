import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todoitems: TodoItem[] ;

  constructor(private todoService: TodoService,
    private router: Router){}
  ngOnInit(): void {
    this.getTodoItems();
  }

  private getTodoItems() {
    this.todoService.getTodoList()
    .subscribe( data => {
      this.todoitems = data;
    });
  }

  updateTodoItem(id: number) {
    this.router.navigate(['update-todo', id]);
  }

  deleteTodoItem(id: number) {
    this.todoService.deleteTodoItem(id).subscribe(
      (data) => {
        this.getTodoItems();
      }
    )
  }

  todoItemDetails(id: number) {
    this.router.navigate(['detail-todo', id]);
  }
}
