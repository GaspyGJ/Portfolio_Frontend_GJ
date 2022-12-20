import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Experiencia } from 'src/app/entitys/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-experiencia-order',
  templateUrl: './edit-experiencia-order.component.html',
  styleUrls: ['./edit-experiencia-order.component.css']
})
export class EditExperienciaOrderComponent implements OnInit {

  experiencias:Experiencia[];

  constructor(@Inject(MAT_DIALOG_DATA) public params: any, private referencia: MatDialogRef<EditExperienciaOrderComponent>, private experienciaService: ExperienciaService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.experiencias = this.params.experiencias;
  }

  aceptar(){

    let listaLI = document.getElementsByClassName("li_e");

    for (let i=0; i<listaLI.length; i++) {
      for(let j=0; j<this.experiencias.length;j++){
        if( listaLI[i].id == this.experiencias[j].idExperiencia.toString() ){
          this.experiencias[j].numero_orden=i;
        }
      }
    }
    
    this.experiencias.sort( (e1, e2) => e1.numero_orden - e2.numero_orden);

    this.experiencias.forEach(experiencia => {
      
      if(experiencia.anioEnd=="Actualidad"){
        experiencia.anioEnd="";
      }

      let experiencia_updated = new Experiencia(experiencia.titulo,experiencia.descripcion,experiencia.anioStart,experiencia.anioEnd,experiencia.tipoExperiencia,
                                                experiencia.tegnologiasUtilizadas,experiencia.linkProyectos,experiencia.numero_orden);

      experiencia_updated.idExperiencia= experiencia.idExperiencia;
  
      this.experienciaService.saveExperiencia(experiencia_updated).subscribe({
        error:(error)=>{
          Swal.fire({
            title: 'Error',
            text: "No se actualizo correctamente",
            icon: 'error',
            confirmButtonText: "Aceptar",
          })
        }
      });

    });

    Swal.fire({
      title: 'Actualizado',
      text: "se actualizo correctamente",
      icon: 'success',
      confirmButtonText: "Aceptar",
    }).then(()=>{
      this.referencia.close("Cerrando");
    })


  }

  DropeoExperiencia(event: CdkDragDrop<any>) {
    const anterior: number = event.previousIndex;
    const actual: number = event.currentIndex;

    moveItemInArray(this.experiencias, anterior, actual);
  
  }

}
