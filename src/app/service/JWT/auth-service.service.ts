
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../../entitys/JWT/login-usuario';
import { NuevoUsuario } from '../../entitys/JWT/nuevo-usuario';
import { JwtDTO } from '../../entitys/JWT/jwt-dto';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  /* Se conceta con el backend me diantes consultas HTTP POST para el servicio de logeo  y creacion de usuario*/

  //URL_Base_request_To_Backend = 'http://localhost:8080/auth';
  URL_Base_request_To_Backend = 'https://gjbackend.herokuapp.com/auth';
 
  constructor(private httpClient: HttpClient) { }

  //para crear un nuevo usuario (no utilizado en el portfolio)
  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.URL_Base_request_To_Backend + '/nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.URL_Base_request_To_Backend + '/login', loginUsuario);
  }
}