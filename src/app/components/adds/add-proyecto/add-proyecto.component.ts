import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Proyecto } from 'src/app/entitys/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {

  proyecto:Proyecto;

  default_proyecto:Proyecto;

  lista_archivos: string[] = [] ;

  archivo_seleccionado : string | null;

  constructor(private proyectoService:ProyectoService,private referencia: MatDialogRef<AddProyectoComponent>) { 

    this.default_proyecto= new Proyecto('Titulo1','Descripcion1','urlGitHub1','urlAppWeb1',['UrlFoto1','UrlFoto2']);
  }

  ngOnInit(): void {
    
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
   

  protected saveProyecto(titulo:string,descripcion:string,urlGitHub:string,urlAppWeb:string){
   
    this.proyecto = new Proyecto(titulo,descripcion,urlGitHub,urlAppWeb,this.lista_archivos);

    this.proyectoService.saveProyecto(this.proyecto).subscribe({
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
