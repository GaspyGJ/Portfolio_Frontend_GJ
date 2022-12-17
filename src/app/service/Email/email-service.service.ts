import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from 'src/app/entitys/Email/email';
import { PathServie } from '../path/path-servie.service';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http: HttpClient, private URL_Base_request_To_Backend:PathServie){
    this.URL_Base_request_To_Backend=PathServie.PATH_backend;
  }


  public sendEmail(email: Email): Observable<any> {
    return this.http.post<any>(this.URL_Base_request_To_Backend + '/send-email', email);
  }

}
