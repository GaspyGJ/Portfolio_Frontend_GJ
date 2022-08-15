import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Persona } from 'src/app/entitys/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { EditAboutMeComponent } from '../../edits/edit-about-me/edit-about-me.component';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor( private matDialog:MatDialog  ,private personaService:PersonaService) { }
  
  personas:Persona[];

  ngOnInit(): void {
    this.obtenerPersona();
  }

  private obtenerPersona(){
    this.personaService.getPersona().subscribe(dato=>{
      this.personas = dato;
      console.log("El nombre de la  persona creada es = "+this.personas[0].nombre);
    })
  }

  protected editAboutMe(){
    const popup =this.matDialog.open(EditAboutMeComponent, {
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
    });
  
    popup.afterClosed().subscribe(i=>{
      this.obtenerPersona();
    })
  }


  }
