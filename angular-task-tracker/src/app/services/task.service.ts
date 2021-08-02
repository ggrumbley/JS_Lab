import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const taskPath = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(taskPath);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const taskPath = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(taskPath, task, httpOptions);
  }
}
