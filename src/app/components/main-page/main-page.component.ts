import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/entitys/JWT/login-usuario';
import { AuthServiceService } from 'src/app/service/JWT/auth-service.service';
import { TokenService } from 'src/app/service/JWT/token-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  isLogged = false;
  isLoginFails = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  mjsError: string;

  constructor(private tokenService: TokenService,
    private authService: AuthServiceService) { }

  ngOnInit(): void {
    /*
    this.loginUsuario = new LoginUsuario('user','user');
    this.authService.login(this.loginUsuario).subscribe({
      next: (dato) => {
        this.isLogged = true;
        this.isLoginFails = false;

        this.tokenService.setToken(dato.token);
        this.tokenService.setUserName(dato.nombreUsuario);
        this.tokenService.setAuthorities(dato.authorities);
        this.roles = dato.authorities;
      },
      error: (e) => {
        this.isLogged = false;
        this.isLoginFails = true;
        this.mjsError = e.message;
        console.log(e.message);
      }

    });*/
  }

}
