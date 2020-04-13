import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-optimized-contaier',
  templateUrl: './todos-optimized-contaier.component.html',
  styleUrls: ['./todos-optimized-contaier.component.scss']
})
export class TodosOptimizedContaierComponent implements OnInit {
  todos = [{ title: 'One' }, { title: 'Two' }];

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.todos = [
      ...this.todos,
      { title: 'Three' }
    ];
  }

}
