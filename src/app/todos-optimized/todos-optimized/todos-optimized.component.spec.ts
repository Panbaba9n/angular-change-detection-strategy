import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosOptimizedComponent } from './todos-optimized.component';

describe('TodosOptimizedComponent', () => {
  let component: TodosOptimizedComponent;
  let fixture: ComponentFixture<TodosOptimizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosOptimizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosOptimizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
