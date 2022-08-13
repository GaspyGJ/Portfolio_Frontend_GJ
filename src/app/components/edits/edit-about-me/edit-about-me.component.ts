import { Component, OnInit} from '@angular/core';
import { Persona } from 'src/app/entitys/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css']
})
export class EditAboutMeComponent implements OnInit {

  constructor( private personaService:PersonaService) { }
  
  personas:Persona[];

  ngOnInit(): void {
    this.obtenerPersona();
  }
   
  private obtenerPersona(){
    this.personaService.getPersona().subscribe(dato=>{
      this.personas = dato;
      console.log("La persona creada es = "+this.personas[0].nombre);
      console.log(this.personas[0].apellido);
    })
  }

  public actualizarPersona(nombre:String ,apellido:String ,edad:String ,
    domicilio:String ,nombrePuesto:String,urlFoto:String,descripcion:String){


      if(nombre!=""){
        this.personas[0].nombre=nombre
      }
      if(apellido!=""){
        this.personas[0].apellido=apellido;
      }
      if(edad!=""){
        this.personas[0].edad=Number(edad);
      }
      if(domicilio!=""){
        this.personas[0].domicilio=domicilio;
      }
      if(nombrePuesto!=""){
        this.personas[0].nombrePuesto=nombrePuesto;
      }
      if(urlFoto!=""){
        this.personas[0].urlFoto=urlFoto;
      }
      if(descripcion!=""){
        this.personas[0].descripcion=descripcion;
      }

    this.personaService.savePersona(this.personas[0]).subscribe(dato=>{
      console.log("La persona se guardo correctamente");
    })
    
  }

}
