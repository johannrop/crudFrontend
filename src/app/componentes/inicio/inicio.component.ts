import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/service/tarea.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  lista:any=[]
  constructor(private tareaService: TareaService){  }

  ngOnInit(): void {
    this.listarTareas();
  }

  listarTareas(){
    this.tareaService.getTareas().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      error=> console.log(error)
    );

  }

  eliminar(id:string){
    this.tareaService.deleteTarea(id).subscribe(
      res=>{
        this.ngOnInit();
        console.log(res);
      },
      error=> console.log(error)
    );
  }

}
