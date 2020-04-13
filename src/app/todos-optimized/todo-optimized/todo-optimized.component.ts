import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-optimized',
  templateUrl: './todo-optimized.component.html',
  styleUrls: ['./todo-optimized.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoOptimizedComponent implements OnInit {
  @Input() todo;

  get runChangeDetection() {
    console.log('TodosComponent - Checking the view');
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
