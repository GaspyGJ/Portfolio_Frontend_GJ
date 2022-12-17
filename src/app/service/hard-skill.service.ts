import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkill } from '../entitys/hard_skill';
import { PathServie } from './path/path-servie.service';

@Injectable({
  providedIn: 'root'
})
export class HardSkillService {

  constructor(private http: HttpClient, private URL_Base_request_To_Backend:PathServie){
    this.URL_Base_request_To_Backend=PathServie.PATH_backend;
  }

  public getHardSkill(): Observable<HardSkill[]>{
    return this.http.get<HardSkill[]>(this.URL_Base_request_To_Backend+'/get/hard/skills');
  }

  public saveHardSkill(hardSkill:HardSkill): Observable<any>{
    return this.http.post<any>(this.URL_Base_request_To_Backend+'/guardar/hard/skill',hardSkill);
  }

  public deleteHardSkill(id:number): Observable<any>{
    return this.http.delete<any>(this.URL_Base_request_To_Backend+`/delete/hard/skill/${id}`);
  }

  public getHardSkill_byID(id:number): Observable<HardSkill>{
    return this.http.get<any>(this.URL_Base_request_To_Backend+`/get/hard/skill/${id}`);
  }
}
