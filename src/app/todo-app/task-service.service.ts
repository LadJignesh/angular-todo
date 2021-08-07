import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../todo-app/task';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private tasksUrl: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.tasksUrl = 'http://localhost:8080/todo';
  }

  getUserTasks(id: number): Observable<Task[]> {
    const url = `${this.tasksUrl}/${id}`;
    console.log(url);
    return this.http.get<Task[]>(url);
  }

  public save(task: Task) {
    return this.http.post<Task>(this.tasksUrl, task);
  }
}
