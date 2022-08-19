import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Experiencia } from 'src/app/entitys/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public params: any, private referencia: MatDialogRef<EditExperienciaComponent>, private experienciaService: ExperienciaService) { }

  experiencia: Experiencia;

  id: number;



  ngOnInit(): void {
    this.id = Number(this.params.id)

    this.experienciaService.getExperiencia_byID(this.id).subscribe(dato => {
      this.experiencia = dato;
    })


  }

  protected actualizar_experiencia(titulo:string,descripcion:string,anioStart:string,anioEnd:string,
    tipoExperiencia:string,tegnologiasUtilizadas:string,linkProyectos:string) {

    let experiencia_Updated = new Experiencia(titulo,descripcion,anioStart,anioEnd,
      tipoExperiencia,tegnologiasUtilizadas,linkProyectos);

    experiencia_Updated.idExperiencia= this.experiencia.idExperiencia;

    this.experienciaService.saveExperiencia(experiencia_Updated).subscribe({
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