import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoitemComponent } from './create-todoitem.component';

describe('CreateTodoitemComponent', () => {
  let component: CreateTodoitemComponent;
  let fixture: ComponentFixture<CreateTodoitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTodoitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTodoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
