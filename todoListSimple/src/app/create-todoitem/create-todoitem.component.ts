import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todoitem',
  templateUrl: './create-todoitem.component.html',
  styleUrl: './create-todoitem.component.css'
})
export class CreateTodoitemComponent implements OnInit{
  todoItem: TodoItem = new TodoItem();
  ngOnInit(): void {
  }
  constructor(private todoService: TodoService,
    private router: Router){}

  onSubmit() {
    this.saveTodoItem();   
  }

  saveTodoItem() {
    this.todoService.createTodoItem(this.todoItem)
    .subscribe( 
      data => this.gotoTodoList()
    );
  }

  gotoTodoList() {
    this.router.navigate(['/todoitems']);
  }



}
