import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logged: boolean;

  constructor(private http: HttpClient) { }

  public verificateUser(nombre: string, password: string) {
    this.verificateBackEnd(nombre, password).subscribe(dato => {
      console.log("El retorno es = " + dato);
      this.logged = dato;
    })
  }

  public verificateBackEnd(nombre: string, password: string): Observable<boolean> {
    let URL_Base_request_To_Backend = 'http://localhost:8080';
    //let URL_Base_request_To_Backend = 'https://portfoliobackendgasparjullier.herokuapp.com';
    let user = { 'nombre': `${nombre}`, 'password': `${password}` };
    return this.http.post<boolean>(URL_Base_request_To_Backend + '/login', user);
  }
}
