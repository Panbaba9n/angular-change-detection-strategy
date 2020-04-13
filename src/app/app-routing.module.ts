import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosContainerComponent } from './todos/todos-container/todos-container.component';
import { TodosOptimizedContaierComponent } from './todos-optimized/todos-optimized-contaier/todos-optimized-contaier.component';


const routes: Routes = [
  {
    path: 'todos',
    component: TodosContainerComponent
  },
  {
    path: 'todos-optimized',
    component: TodosOptimizedContaierComponent
  },
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
