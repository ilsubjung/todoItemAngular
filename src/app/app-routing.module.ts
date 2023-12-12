import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoitemComponent } from './create-todoitem/create-todoitem.component';
import { UpdateTodoitemComponent } from './update-todoitem/update-todoitem.component';
import { TodoitemDetailsComponent } from './todoitem-details/todoitem-details.component';

const routes: Routes = [
  { path: 'todoitems', component: TodoListComponent},
  { path: 'create-todo', component: CreateTodoitemComponent},
  { path: 'update-todo/:id', component: UpdateTodoitemComponent},
  { path: 'detail-todo/:id', component: TodoitemDetailsComponent},
  { path: '', redirectTo: 'todoitems', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
