import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskPageComponent } from './task-page/task-page.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditListComponent } from './task-edit-list/task-edit-list.component';


@NgModule({
  declarations: [TaskPageComponent, TaskListComponent, TaskEditListComponent],
  imports: [
    CommonModule
  ]
})
export class TodoAppModule { }
