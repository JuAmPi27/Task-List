import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../servicios/task.service';
import { task } from '../../task'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks:task[] = [];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void { 
    this.taskService.getTasks().subscribe( (task) =>  {this.tasks = task} );
}

}
