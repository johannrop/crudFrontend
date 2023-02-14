import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Tarea, TareaService } from 'src/app/service/tarea.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit  {
  //atributos nombrandos tal cual como en el JSON de nuestra API Rest
  /**
   * @param tareaNueva
   * Objeto del tipo tarea con 3 atributos (id, tarea, finalizado)
   */
  tareaNueva: Tarea={id: '', tarea: '', finalizado:false };

  constructor(private tareaService: TareaService, private router:Router){ }

  ngOnInit(): void {
  }

  agregarTarea(){
    this.tareaService.saveTarea(this.tareaNueva).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/inicio']);

      },
      err=>{
        console.log(err)
      }
    );
  }
}
