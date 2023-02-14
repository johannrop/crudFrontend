import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea, TareaService } from 'src/app/service/tarea.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id:string="";
  tareaActual: Tarea={id: '', tarea: '', finalizado:false };

  constructor(
    private tareaService:TareaService, 
    private activateRouter: ActivatedRoute, 
    private router:Router
    ){ }


  ngOnInit(): void {
    // recuperar ID que vamos a editar
    this.id= this.activateRouter.snapshot.params['id'];
    console.log(this.id);
    this.tareaService.getUnaTarea(this.id).subscribe(
      res=>{
        this.tareaActual=res
      },
      err=>{
        console.log(err)
      }
    );
  }

  guardar(){
    this.tareaService.editTarea(this.id,this.tareaActual).subscribe(
      res=>{
        this.router.navigate(['/inicio']);
        console.log(res);
      },
      err=>{
        console.log(err);
      }

    );
  }

}
