import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoOptimizedComponent } from './todo-optimized.component';

describe('TodoOptimizedComponent', () => {
  let component: TodoOptimizedComponent;
  let fixture: ComponentFixture<TodoOptimizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoOptimizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoOptimizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
