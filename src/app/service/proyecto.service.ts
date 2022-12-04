import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../entitys/proyecto';
import { PathServie } from './path/path-servie.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient, private URL_Base_request_To_Backend:PathServie){
    this.URL_Base_request_To_Backend=PathServie.PATH_backend;
}


  public getProyecto(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.URL_Base_request_To_Backend+'/get/proyectos');
  }

  public saveProyecto(experiencia:Proyecto): Observable<any>{
    return this.http.post<any>(this.URL_Base_request_To_Backend+'/guardar/proyecto',experiencia);
  }

  public deleteProyecto(id:number): Observable<any>{
    return this.http.delete<any>(this.URL_Base_request_To_Backend+`/delete/proyecto/${id}`);
  }

  public getProyecto_byID(id:number): Observable<Proyecto>{
    return this.http.get<any>(this.URL_Base_request_To_Backend+`/get/proyecto/${id}`);
  }
}
