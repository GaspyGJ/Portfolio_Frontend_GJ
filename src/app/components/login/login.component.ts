import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

//import { FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  public userLogin(nombre: string, password: string){
   this.loginService.verificateUser(nombre,password);
  }

 

}
