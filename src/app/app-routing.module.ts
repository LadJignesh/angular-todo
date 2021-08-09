import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './indexpage/index/index.component';
import { TaskPageComponent } from './todo-app/task-page/task-page.component';
import { LogoutComponent } from './indexpage/logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'todo', component: TaskPageComponent,canActivate:[AuthGaurdService] },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
