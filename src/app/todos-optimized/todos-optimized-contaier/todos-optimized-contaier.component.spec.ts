import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosOptimizedContaierComponent } from './todos-optimized-contaier.component';

describe('TodosOptimizedContaierComponent', () => {
  let component: TodosOptimizedContaierComponent;
  let fixture: ComponentFixture<TodosOptimizedContaierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosOptimizedContaierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosOptimizedContaierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
