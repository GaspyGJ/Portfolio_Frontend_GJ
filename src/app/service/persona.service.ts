import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entitys/persona';
import { PathServie } from './path/path-servie.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
//URL_Base_request_To_Backend = 'http://localhost:8080';
//URL_Base_request_To_Backend = 'https://gjbackend.herokuapp.com';

  constructor(private http: HttpClient, private URL_Base_request_To_Backend:PathServie){
    this.URL_Base_request_To_Backend=PathServie.PATH_backend;
}


  public getPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.URL_Base_request_To_Backend+'/get/personas');
  }

  public savePersona(persona:Persona): Observable<any>{
    return this.http.post<any>(this.URL_Base_request_To_Backend+'/guardar/persona',persona);
  }

}
 