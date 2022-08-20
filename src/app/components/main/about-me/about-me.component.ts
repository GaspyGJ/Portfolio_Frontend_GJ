import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Persona } from 'src/app/entitys/persona';
import { TokenService } from 'src/app/service/JWT/token-service.service';
import { PersonaService } from 'src/app/service/persona.service';
import { EditAboutMeComponent } from '../../edits/edit-about-me/edit-about-me.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  isLogged = false;

  constructor(private tokenService: TokenService, private matDialog:MatDialog  ,private personaService:PersonaService) { }
  
  personas:Persona[];

  ngOnInit(): void {
    this.obtenerPersona();
    if(this.tokenService.getToken()){
      //esta logeado
      this.isLogged=true;
    }
  }

  private obtenerPersona(){
    this.personaService.getPersona().subscribe(dato=>{
      this.personas = dato;
    })
  }

  protected editAboutMe(){
    const popup =this.matDialog.open(EditAboutMeComponent, {
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      height:'75%'
    });
  
    popup.afterClosed().subscribe(i=>{
      this.obtenerPersona();
    })
  }

  }