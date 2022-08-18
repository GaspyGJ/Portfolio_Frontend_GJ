import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/entitys/JWT/login-usuario';
import { AuthServiceService } from 'src/app/service/JWT/auth-service.service';
import { TokenService } from 'src/app/service/JWT/token-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFails = false;

  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];

  //mjsError: string;

  constructor(private tokenService: TokenService,
    private authService: AuthServiceService,
    private router: Router,
    private referencia: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) { // lo mismo que this.tokenService.getToken()!=""
      this.isLogged = true;
      this.isLoginFails = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    //los parametros del LoginUsuario son los del formulario con [(NgModel)]
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe({
      next: (dato) => {
        this.isLogged = true;
        this.isLoginFails = false;

        this.tokenService.setToken(dato.token);
        this.tokenService.setUserName(dato.nombreUsuario);
        this.tokenService.setAuthorities(dato.authorities);
        this.roles = dato.authorities;
        //this.referencia.close("Cerrando");
        window.location.reload();
      },
      error: (e) => {
        this.isLogged = false;
        this.isLoginFails = true;
        //this.mjsError = e.message;
        //console.log(e.message);
      }

    });
  }

}
