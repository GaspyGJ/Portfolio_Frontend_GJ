import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/JWT/token-service.service';
import Swal from 'sweetalert2';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged:boolean;

  constructor(private router:Router,private matDialog:MatDialog , private tokenService:TokenService) { }

  ngOnInit(): void{
    if(this.tokenService.getToken()){
      this.isLogged=true;
      console.log("Logged succesfully")
    }
    else{
      this.isLogged=false;
      console.log("Error: Not Logged")
    }
  }

  enterLogin(){
    const popup = this.matDialog.open(LoginComponent, {
      enterAnimationDuration:'800ms',
      exitAnimationDuration:'800ms'
    });
    var btn_login = document.getElementById("btn-log-in")!;
    btn_login.style.visibility='hidden';

    popup.afterClosed().subscribe(()=>{
      btn_login.style.visibility='visible';
    })

  }
  
  public scrollToContact(){
  var element = document.getElementById("Seccion-Contacto")!;
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  
  public scrollToProjects(){
    var element = document.getElementById("Seccion-Proyectos")!;
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  onLogout(): void {
    Swal.fire({
      title: 'Desea cerrar sesion ?',
      text: "",
      icon: 'question',
      confirmButtonText: "Aceptar",
      showCancelButton: true,
      cancelButtonText: "Cancelar",

    }).then((resultado)=>{
      if(resultado.isConfirmed){
        this.tokenService.logOut();
        window.location.reload();
      }
    });
    
  }
}
