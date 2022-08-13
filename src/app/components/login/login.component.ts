import { Component, OnInit } from '@angular/core';

//import { FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginStatus:boolean;

  constructor() {}

  ngOnInit(): void {
  }

  protected verificateUser(nombre:String , password:String){

  }



}
