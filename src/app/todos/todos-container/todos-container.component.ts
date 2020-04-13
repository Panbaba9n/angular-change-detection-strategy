import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.scss']
})
export class TodosContainerComponent implements OnInit {
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
