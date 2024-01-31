import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-update-todoitem',
  templateUrl: './update-todoitem.component.html',
  styleUrl: './update-todoitem.component.css'
})
export class UpdateTodoitemComponent implements OnInit{
  todoItem: TodoItem = new TodoItem();
  id: number;
 
  constructor(private todoService: TodoService,
    private activateRouter: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params['id'];
    this.todoService.getTodoItemById(this.id)
    .subscribe( (data) => this.todoItem = data);
  }

  onSubmit() {
    this.todoService.updateTodoItem(this.id, this.todoItem).
    subscribe( (data) => this.gotoTodoList())
  }

  gotoTodoList() {
    this.router.navigate(['/todoitems']);
  }
 
}
