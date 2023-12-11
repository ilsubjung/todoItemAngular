import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodoitemComponent } from './create-todoitem/create-todoitem.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'todoitems', component: TodoListComponent},
  { path: 'create-todo', component:CreateTodoitemComponent},
  { path: '', redirectTo: 'todoitems', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CreateTodoitemComponent
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
