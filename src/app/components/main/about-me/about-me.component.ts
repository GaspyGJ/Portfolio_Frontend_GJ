import { Component, OnInit} from '@angular/core';
import { Persona } from 'src/app/entitys/persona';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor( private personaService:PersonaService) { }
  
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

  }
