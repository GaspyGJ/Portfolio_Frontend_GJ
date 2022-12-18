import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Educacion } from 'src/app/entitys/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import Swal from 'sweetalert2';
import { years } from 'src/app/service/Extra/anios';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {

  educacion:Educacion;
  default_Educacion:Educacion;

  yearsList = years;

  constructor(private educacionService:EducacionService , private referencia: MatDialogRef<AddEducacionComponent>) {
    this.default_Educacion = new Educacion("Titulo Ejemplo 1","Descripcion Ejemplo 1","2022","","Cursando",-1);
   }

  ngOnInit(): void { }

  protected saveEducacion(titulo:string,descripcion:string,anioStart:string,anioEnd:string,estadoActual:string){
 
    this.educacion = new Educacion(titulo,descripcion,anioStart,anioEnd,estadoActual, -1);
  
    this.educacionService.saveEducacion(this.educacion).subscribe({
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





