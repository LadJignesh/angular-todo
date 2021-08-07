import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditListComponent } from './task-edit-list.component';

describe('TaskEditListComponent', () => {
  let component: TaskEditListComponent;
  let fixture: ComponentFixture<TaskEditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskEditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
