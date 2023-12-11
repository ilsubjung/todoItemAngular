import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';
import { TodoService } from '../todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todoitem-details',
  templateUrl: './todoitem-details.component.html',
  styleUrl: './todoitem-details.component.css'
})
export class TodoitemDetailsComponent implements OnInit{
  todoItem: TodoItem;
  id: number;
 
  constructor(private todoService: TodoService,
    private activatedRouter: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.todoItem = new TodoItem();
    this.id = this.activatedRouter.snapshot.params['id'];
     this.todoService.getTodoItemById(this.id)
    .subscribe( (data) => this.todoItem = data);
  }

  gotoTodoList() {
    this.router.navigate(['/todoitems']);
  }
}
