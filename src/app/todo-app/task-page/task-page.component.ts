import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  userId:string;
  username:string;

  constructor(private router:Router, private taskService:TaskServiceService) {
    this.userId = sessionStorage.getItem('userId');
   }

  model = new Task();

  onSubmit(form: NgForm){
    let task: Task = {
      userId: this.userId,
      task: form.value.task,
      description:form.value.description,
      lastUpdated: Date.now(),
      taskCompleted: form.value.taskCompleted
    }
    this.taskService.save(task, parseInt(this.userId)).subscribe((data)=>{
      console.log("Task saved")
    });
  }

  ngOnInit() {
    this.username=sessionStorage.getItem('username');
  }

  

}
