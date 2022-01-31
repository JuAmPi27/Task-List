import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { task } from 'src/app/task';
import { TASKS } from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

@Input() task:task = TASKS [0];
@Output() onDeleteTask: EventEmitter<task> = new EventEmitter(); //paso 3 junto con los import correspondientes
@Output() onToggleRecordatorio: EventEmitter<task> = new EventEmitter(); 
faTimes = faTimes;


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:task) { //paso 2
    this.onDeleteTask.emit(task); //paso 4 y luego el paso 5 es en el componente padre (task.component.html)
  }

  onToggle(task:task) { 
    this.onToggleRecordatorio.emit(task);
  }

}
