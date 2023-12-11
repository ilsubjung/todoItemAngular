import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodoitemComponent } from './create-todoitem/create-todoitem.component';
import { FormsModule } from '@angular/forms';
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
  declarations: [
    AppComponent,
    TodoListComponent,
    CreateTodoitemComponent,
    UpdateTodoitemComponent,
    TodoitemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
