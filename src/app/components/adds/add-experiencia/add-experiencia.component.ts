import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Experiencia } from 'src/app/entitys/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import Swal from 'sweetalert2';
import { years } from 'src/app/service/Extra/anios';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {

  experiencia:Experiencia;
  default_Experiencia:Experiencia;

  yearsList = years;

  constructor(private experienciaService:ExperienciaService , private referencia: MatDialogRef<AddExperienciaComponent>) { 

    this.default_Experiencia = new Experiencia("Titulo Ejemplo 1","Descripcion Ejemplo 1","2022","2022",
      "Contrato","C++ , JS , HTML , CSS","Link a Proyecto 1");
  }

  ngOnInit(): void {
    
  }

  protected saveExperiencia(titulo:string,descripcion:string,anioStart:string,anioEnd:string,tipoExperiencia:string,tegnologiasUtilizadas:string,linkProyectos:string){
   
    this.experiencia = new Experiencia(titulo,descripcion,anioStart,anioEnd,tipoExperiencia,tegnologiasUtilizadas,linkProyectos);

    this.experienciaService.saveExperiencia(this.experiencia).subscribe({
      next:(dato)=>{
        Swal.fire({
          title: 'Agregado',
          text: "Se agrego correctamente",
          icon: 'success',
          confirmButtonText: "Aceptar",
        }).then(()=>{
          this.referencia.close("Cerrando");
        })
      },
      error:(error)=>{
        Swal.fire({
          title: 'Error',
          text: "No se agrego correctamente",
          icon: 'error',
          confirmButtonText: "Aceptar",
        })
      }
    });
  }
  

}
