import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../entitys/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
URL_Base_request_To_Backend = 'http://localhost:8080';
  //URL_Base_request_To_Backend = 'https://portfoliobackendgasparjullier.herokuapp.com';

  constructor(private http: HttpClient) { }

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
