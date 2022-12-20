import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/entitys/proyecto';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProyectoService } from 'src/app/service/proyecto.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-edit-proyectos-order',
  templateUrl: './edit-proyectos-order.component.html',
  styleUrls: ['./edit-proyectos-order.component.css']
})
export class EditProyectosOrderComponent implements OnInit {

  proyectos:Proyecto[];

  constructor(@Inject(MAT_DIALOG_DATA) public params: any, private referencia: MatDialogRef<EditProyectosOrderComponent>, private proyectosService: ProyectoService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.proyectos = this.params.proyectos;
  }

  aceptar(){

    let listaLI = document.getElementsByClassName("li_e");

    for (let i=0; i<listaLI.length; i++) {
      for(let j=0; j<this.proyectos.length;j++){
        if( listaLI[i].id == this.proyectos[j].idProyecto.toString() ){
          this.proyectos[j].numero_orden=i;
        }
      }
    }
    
    this.proyectos.sort( (e1, e2) => e1.numero_orden - e2.numero_orden);

    this.proyectos.forEach(proyecto => {
      let proyecto_updated = new Proyecto(proyecto.titulo,proyecto.descripcion,proyecto.urlGitHub,proyecto.urlAppWeb,proyecto.urlFotos,proyecto.numero_orden);

      proyecto_updated.idProyecto= proyecto.idProyecto;
  
      this.proyectosService.saveProyecto(proyecto_updated).subscribe({
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

  DropeoProyecto(event: CdkDragDrop<any>) {
    const anterior: number = event.previousIndex;
    const actual: number = event.currentIndex;

    moveItemInArray(this.proyectos, anterior, actual);
  
  }

}
