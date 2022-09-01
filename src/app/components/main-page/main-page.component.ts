import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/entitys/JWT/login-usuario';
import { isLoadDB } from 'src/app/service/isLoadDB';
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
    private authService: AuthServiceService, private isLoadDB: isLoadDB) { }

  ngOnInit(): void {}

}