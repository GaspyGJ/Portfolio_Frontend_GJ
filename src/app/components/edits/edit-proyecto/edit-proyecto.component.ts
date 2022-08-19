import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proyecto } from 'src/app/entitys/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public params:any, private referencia:MatDialogRef<EditProyectoComponent>,
  private proyectoService: ProyectoService) { }

  proyecto:Proyecto;

  id: number;

  urlFotos:string[]=[];

  ngOnInit(): void {
      this.id= Number(this.params.id);

      this.proyectoService.getProyecto_byID(this.id).subscribe(dato => {
        this.proyecto = dato;
        this.urlFotos=this.proyecto.urlFotos;
      })
    //})
  }

  protected actualizar_Proyecto(titulo:string,descripcion:string,urlGitHub:string,urlAppWeb:string) {

    let proyecto_Updated = new Proyecto(titulo,descripcion,urlGitHub,urlAppWeb,this.urlFotos);
  
    proyecto_Updated.idProyecto = this.proyecto.idProyecto;

    this.proyectoService.saveProyecto(proyecto_Updated).subscribe({
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
  protected addFoto(urlFoto:string){
    this.urlFotos.push(urlFoto);
  }
  protected dropFoto(urlFoto:string){
    let index_urlFotosDroped = this.urlFotos.findIndex(element=> element === urlFoto);
    this.urlFotos.splice(index_urlFotosDroped,1);
  }

}

