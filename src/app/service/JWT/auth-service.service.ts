
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../../entitys/JWT/login-usuario';
import { NuevoUsuario } from '../../entitys/JWT/nuevo-usuario';
import { JwtDTO } from '../../entitys/JWT/jwt-dto';
import { PathServie } from '../path/path-servie.service';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  /* Se conceta con el backend mediantes consultas HTTP POST para el servicio de logeo  y creacion de usuario*/
 
  constructor(private httpClient: HttpClient, private URL_Base_request_To_Backend:PathServie){
    this.URL_Base_request_To_Backend=PathServie.PATH_backend;
}

  //para crear un nuevo usuario (no utilizado en el portfolio)
  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.URL_Base_request_To_Backend + '/auth/nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.URL_Base_request_To_Backend + '/auth/login', loginUsuario);
  }

}