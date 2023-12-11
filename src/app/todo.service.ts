import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = "http://localhost:8080/api/v1";
  constructor(private httpClient: HttpClient) { }

  getTodoList() : Observable<TodoItem[]> {
    let url = this.baseUrl + "/todoItems";
    return this.httpClient.get<TodoItem[]>(`${url}`);
  }

  createTodoItem(todoItem: TodoItem): Observable<Object> {
    let url = this.baseUrl + "/todoItem";
    console.log(url)
    console.log(todoItem);
    return this.httpClient.post(`${url}`, todoItem);
    console.log("after post");
  }
}
