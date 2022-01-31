import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { task } from '../../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  @Output() onAddTask: EventEmitter<task> = new EventEmitter();
  
  texto:string = "";
  dia:string = "";
  recordatorio:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.texto.length === 0) {
      alert("... ¡Por favor agrega una tarea! ...");
      return
    }
    // const newTask = {
    //   texto: this.texto, 
    //   dia: this.dia, 
    //   recordatorio: this.recordatorio
    // };
   //es lo mismo que lo de antes pero mucho mas resumido
      const {texto, dia, recordatorio} = this;
      const newTask = {texto, dia, recordatorio};
      this.onAddTask.emit(newTask);
  }

}
