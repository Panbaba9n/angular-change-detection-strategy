import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodosContainerComponent } from './todos/todos-container/todos-container.component';
import { TodosOptimizedContaierComponent } from './todos-optimized/todos-optimized-contaier/todos-optimized-contaier.component';
import { TodosOptimizedComponent } from './todos-optimized/todos-optimized/todos-optimized.component';
import { TodoOptimizedComponent } from './todos-optimized/todo-optimized/todo-optimized.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    TodosContainerComponent,
    TodosOptimizedContaierComponent,
    TodosOptimizedComponent,
    TodoOptimizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
