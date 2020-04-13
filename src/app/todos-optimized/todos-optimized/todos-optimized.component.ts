import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todos-optimized',
  templateUrl: './todos-optimized.component.html',
  styleUrls: ['./todos-optimized.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosOptimizedComponent {
  @Input() todos;

}
