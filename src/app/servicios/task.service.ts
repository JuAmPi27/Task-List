import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { task } from '../task';
import { TASKS } from '../mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({"content-type":"application/json"})
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks";

  constructor(private http:HttpClient) { }

  getTasks(): Observable<task[]> {
    return this.http.get<task[]>(this.apiUrl);
  }

  deleteTask(task:task): Observable<task> { // paso 7
    const url = `${this.apiUrl}/${task.id}`; // comillas invertidas alt 96
    return this.http.delete<task>(url);
  }

  updateTaskRecordatorio(task:task): Observable<task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<task>(url, task, httpOptions); // el httpOptions es para informarle al back-end que lo que le estamos mandando es un json en el put
  }

  addTask(task:task): Observable<task>  {
    return this.http.post<task>(this.apiUrl, task, httpOptions);
  }

}
