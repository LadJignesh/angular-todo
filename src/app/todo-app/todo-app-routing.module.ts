import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskPageComponent } from './task-page/task-page.component';


const routes: Routes = [
  { path: '/todo', component: TaskPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoAppRoutingModule { }
