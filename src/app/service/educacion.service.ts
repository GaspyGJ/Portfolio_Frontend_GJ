import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../entitys/educacion';
import { PathServie } from './path/path-servie.service';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
 //URL_Base_request_To_Backend = 'http://localhost:8080';


  constructor(private http: HttpClient , private URL_Base_request_To_Backend:PathServie){
          this.URL_Base_request_To_Backend=PathServie.PATH_backend;
   }

  public getEducaciones(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.URL_Base_request_To_Backend+'/get/educaciones');
  }

  public saveEducacion(educacion:Educacion): Observable<any>{
    return this.http.post<any>(this.URL_Base_request_To_Backend+'/guardar/educacion',educacion);
  }

  public deleteEducacion(id:number): Observable<any>{
    return this.http.delete<any>(this.URL_Base_request_To_Backend+`/delete/educacion/${id}`);
  }

  public getEducacion_byID(id:number): Observable<Educacion>{
    return this.http.get<any>(this.URL_Base_request_To_Backend+`/get/educacion/${id}`);
  }
}
