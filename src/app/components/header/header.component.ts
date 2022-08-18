import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenService } from 'src/app/service/JWT/token-service.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isLogged:boolean;

  constructor(private matDialog:MatDialog , private tokenService:TokenService) { }

  ngOnInit(): void{
    if(this.tokenService.getToken()){
      this.isLogged=true;
      console.log("logeado")
    }
    else{
      this.isLogged=false;
      console.log("no logeado")
    }
  }


  enterLogin(){
    const popup = this.matDialog.open(LoginComponent, {
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
    });
  
    popup.afterClosed().subscribe(i=>{
      //hacer algo
    })
  }
  
  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }


}
