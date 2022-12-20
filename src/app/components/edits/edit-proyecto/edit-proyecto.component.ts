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

  lista_archivos: string[] = [] ;
  archivo_seleccionado : string | null;

  ngOnInit(): void {
      this.id= Number(this.params.id);

      this.proyectoService.getProyecto_byID(this.id).subscribe(dato => {
        this.proyecto = dato;
        this.lista_archivos=this.proyecto.urlFotos;
      })
  }

  obtenerArchivo(event:any):any{
    const archivoCapturado:Blob = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(archivoCapturado);
    reader.onload = () => {
      let archivo = <string>reader.result
      this.archivo_seleccionado = archivo;
    }
  }


  protected actualizar_Proyecto(titulo:string,descripcion:string,urlGitHub:string,urlAppWeb:string) {

    let proyecto_Updated = new Proyecto(titulo,descripcion,urlGitHub,urlAppWeb,this.lista_archivos,this.proyecto.numero_orden);
  
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
  protected addFoto(){
    if(this.archivo_seleccionado!=null){
      this.lista_archivos?.push(this.archivo_seleccionado);
    }
    this.archivo_seleccionado=null;
  }
  protected dropFoto(urlFoto:string){
    let index_urlFotosDroped = this.lista_archivos.findIndex(element=> element === urlFoto);
    this.lista_archivos.splice(index_urlFotosDroped,1);
  }

}

