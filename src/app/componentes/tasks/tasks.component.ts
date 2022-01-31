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

deleteTask(task:task) { // paso 6...vamos a recibir una tarea y se la tenemos que pasar a ntra bd para q sea borrada, esto lo hacemos a través d ntro servicio task.service
  this.taskService.deleteTask(task).subscribe(() => {this.tasks = this.tasks.filter((t) => t.id !==task.id)}); //paso 8
}

toggleRecordatorio(task:task) {
  task.recordatorio = !task.recordatorio;
  this.taskService.updateTaskRecordatorio(task).subscribe(); // con esto se lo pasamos a ntro servicio para que la actualice en ntra base de datos
}

addTask(task:task) {
  this.taskService.addTask(task).subscribe(task => {this.tasks.push(task)});
}

}
