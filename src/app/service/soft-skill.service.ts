import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkill } from '../entitys/soft_skills';
import { PathServie } from './path/path-servie.service';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {

  constructor(private http: HttpClient, private URL_Base_request_To_Backend:PathServie){
    this.URL_Base_request_To_Backend=PathServie.PATH_backend;
}


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