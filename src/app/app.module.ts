import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './indexpage/index/index.component';
import { TaskPageComponent } from './todo-app/task-page/task-page.component';
import { LoginComponent } from './indexpage/login/login.component';
import { SignupComponent } from './indexpage/signup/signup.component';
import { TaskEditListComponent } from './todo-app/task-edit-list/task-edit-list.component';
import { TaskListComponent } from './todo-app/task-list/task-list.component';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './indexpage/logout/logout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TaskPageComponent,
    LoginComponent,
    SignupComponent,
    TaskEditListComponent,
    TaskListComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
