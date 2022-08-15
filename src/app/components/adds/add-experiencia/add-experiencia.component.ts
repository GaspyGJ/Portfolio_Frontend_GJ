import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Experiencia } from 'src/app/entitys/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {

  experiencia:Experiencia;
  default_Experiencia:Experiencia;

  constructor(private experienciaService:ExperienciaService , private referencia: MatDialogRef<AddExperienciaComponent>) { 

    this.default_Experiencia = new Experiencia("Titulo Ejemplo 1","Descripcion Ejemplo 1","2022","2022",
      "Contrato","C++ , JS , HTML , CSS","Link a Proyecto 1");
  }

  ngOnInit(): void {
    
  }

  protected saveExperiencia(titulo:string,descripcion:string,anioStart:string,anioEnd:string,tipoExperiencia:string,tegnologiasUtilizadas:string,linkProyectos:string){
   
    this.experiencia = new Experiencia(titulo,descripcion,anioStart,anioEnd,tipoExperiencia,tegnologiasUtilizadas,linkProyectos);

    this.experienciaService.saveExperiencia(this.experiencia).subscribe(dato=>{})

    this.referencia.close("Cerrando");
  }
  

}
