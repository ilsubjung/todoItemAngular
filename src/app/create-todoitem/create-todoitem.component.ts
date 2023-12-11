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
    .subscribe( {
      next: (data) => {
        console.log("data="+data);
      },
      error: (e) => console.log(e),
      complete: () => {
        console.log("complete");
        this.gotoTodoList();
      }
    });
  }

  gotoTodoList() {
    this.router.navigate(['/todoitems']);
  }



}
