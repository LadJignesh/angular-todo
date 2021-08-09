import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskServiceService } from '../task-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskServiceService) { }

  ngOnInit() {
   
    this.taskService.getUserTasks(parseInt(sessionStorage.getItem('userId'))).subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks;
    })
  }

  removeTask(taskId:number){
    this.taskService.removeTask(taskId);
  }

}
