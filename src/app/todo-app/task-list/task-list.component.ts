import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskServiceService } from '../task-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  // @Input() userId: string;
  tasks: Task[];

  constructor(private taskService: TaskServiceService) { }

  ngOnInit() {
    this.taskService.getUserTasks(2).subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks;
    })
  }

}
