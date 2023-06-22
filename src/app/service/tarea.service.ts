import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  /**
   * @Param url
   * Ruta donde se encuentra nuestra API Rest 
   */
  url='http://ec2-3-237-91-174.compute-1.amazonaws.com:8000/api/tareas'
  constructor(private http: HttpClient) { }

  /**
   * @param getTareas
   * Metodo implementado para ver todos los datos de la tabla tarea
   */
  getTareas():Observable<any>{
    //Pasamos nuestra ruta al metodo de angular
    return this.http.get(this.url);
  }

  /**
   * @param getUnaTarea
   * Metodo implementado para ver una tarea especifica segun su ID
   */
  getUnaTarea(id: String):Observable<any>{
    return this.http.get(this.url + '/' + id)
  }

  /**
   * @param saveTarea
   * Metodo implementado para guardar una tarea 
   */
  saveTarea(tarea : Tarea):Observable<any>{
    return this.http.post(this.url, tarea)
  }

  /**
   * @param getUnaTarea
   * Metodo implementado para editar una tarea especifica segun su ID
   */
  editTarea(id:String, tarea: Tarea):Observable<any>{
    return this.http.put(this.url + '/' + id, tarea)
  }

  /**
   * @param getUnaTarea
   * Metodo implementado para borrar una tarea especifica segun su ID
   */
  deleteTarea(id:String):Observable<any>{
    return this.http.delete(this.url + '/' + id)
  }
}

export interface Tarea{
  id: string;
  tarea:string;
  finalizado: boolean;
}