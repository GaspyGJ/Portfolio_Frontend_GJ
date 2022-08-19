import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkill } from '../entitys/soft_skills';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {

  //URL_Base_request_To_Backend = 'http://localhost:8080';
  URL_Base_request_To_Backend = 'https://gjbackend.herokuapp.com';

  constructor(private http: HttpClient) { }

  public getHardSkill(): Observable<SoftSkill[]>{
    return this.http.get<SoftSkill[]>(this.URL_Base_request_To_Backend+'/get/soft/skills');
  }

  public saveSoftSkill(softSkill:SoftSkill): Observable<any>{
    return this.http.post<any>(this.URL_Base_request_To_Backend+'/guardar/soft/skill',softSkill);
  }

  public deleteSoftSkill(id:number): Observable<any>{
    return this.http.delete<any>(this.URL_Base_request_To_Backend+`/delete/soft/skill/${id}`);
  }

  public getSoftSkill_byID(id:number): Observable<SoftSkill>{
    return this.http.get<any>(this.URL_Base_request_To_Backend+`/get/soft/skill/${id}`);
  }
}