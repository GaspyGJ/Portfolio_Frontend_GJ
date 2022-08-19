import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Educacion } from 'src/app/entitys/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public params: any, private referencia: MatDialogRef<EditEducacionComponent>, private educacionService: EducacionService) { }

  educacion: Educacion;

  id: number;

  ngOnInit(): void {
    this.id = Number(this.params.id)

    this.educacionService.getEducacion_byID(this.id).subscribe(dato => {
      this.educacion = dato;
    })
  }

  protected actualizar_Educacion(titulo:string,descripcion:string,anioStart:string,anioEnd:string,estadoActual:string) {

    let educacion_Updated = new Educacion(titulo,descripcion,anioStart,anioEnd,estadoActual);

    educacion_Updated.idEducacion= this.educacion.idEducacion;

    this.educacionService.saveEducacion(educacion_Updated).subscribe({
      next:(dato)=>{
        Swal.fire({
          title: 'Actualizado',
          text: "se actualizo correctamente",
          icon: 'success',
          confirmButtonText: "Aceptar",
        }).then(()=>{
          this.referencia.close("Cerrando");
        })
      },
      error:(error)=>{
        Swal.fire({
          title: 'Error',
          text: "No se actualizo correctamente",
          icon: 'error',
          confirmButtonText: "Aceptar",
        })
      }
    });

  }

}