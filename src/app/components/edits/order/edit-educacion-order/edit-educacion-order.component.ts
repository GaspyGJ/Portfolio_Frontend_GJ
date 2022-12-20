import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Educacion } from 'src/app/entitys/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-educacion-order',
  templateUrl: './edit-educacion-order.component.html',
  styleUrls: ['./edit-educacion-order.component.css']
})
export class EditEducacionOrderComponent implements OnInit {

  educaciones:Educacion[];

  constructor(@Inject(MAT_DIALOG_DATA) public params: any, private referencia: MatDialogRef<EditEducacionOrderComponent>, private educacionService: EducacionService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.educaciones = this.params.educaciones;
  }

  aceptar(){

    let listaLI = document.getElementsByClassName("li_e");

    for (let i=0; i<listaLI.length; i++) {
      for(let j=0; j<this.educaciones.length;j++){
        if( listaLI[i].id == this.educaciones[j].idEducacion.toString() ){
          this.educaciones[j].numero_orden=i;
        }
      }
    }
    
    this.educaciones.sort( (e1, e2) => e1.numero_orden - e2.numero_orden);

    this.educaciones.forEach(educacion => {
      
      if(educacion.anioEnd=="Actualidad"){
        educacion.anioEnd="";
      }

      let educacion_updated = new Educacion(educacion.titulo, educacion.descripcion,educacion.anioStart,educacion.anioEnd, educacion.estadoActual, educacion.numero_orden);

      educacion_updated.idEducacion= educacion.idEducacion;
  
      this.educacionService.saveEducacion(educacion_updated).subscribe({
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

  DropeoEducacion(event: CdkDragDrop<any>) {
    const anterior: number = event.previousIndex;
    const actual: number = event.currentIndex;

    moveItemInArray(this.educaciones, anterior, actual);
  
  }

}
