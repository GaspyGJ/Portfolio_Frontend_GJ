import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../entitys/experiencia';
import { PathServie } from './path/path-servie.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient, private URL_Base_request_To_Backend:PathServie){
    this.URL_Base_request_To_Backend=PathServie.PATH_backend;
}

  public getExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.URL_Base_request_To_Backend+'/get/experiencias');
  }

  public saveExperiencia(experiencia:Experiencia): Observable<any>{
    return this.http.post<any>(this.URL_Base_request_To_Backend+'/guardar/experiencia',experiencia);
  }

  public deleteExperiencia(id:number): Observable<any>{
    return this.http.delete<any>(this.URL_Base_request_To_Backend+`/delete/experiencia/${id}`);
  }

  public getExperiencia_byID(id:number): Observable<Experiencia>{
    return this.http.get<any>(this.URL_Base_request_To_Backend+`/get/experiencia/${id}`);
  }
}
