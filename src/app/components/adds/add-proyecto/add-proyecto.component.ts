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
  urlFotos:string[]=[];

  constructor(private proyectoService:ProyectoService,private referencia: MatDialogRef<AddProyectoComponent>) { 

    this.default_proyecto= new Proyecto('Titulo1','Descripcion1','urlGitHub1','urlAppWeb1',['UrlFoto1','UrlFoto2']);
  }

  ngOnInit(): void {
    
  }

  protected addFoto(urlfoto:string){
    this.urlFotos.push(urlfoto);
    this.default_proyecto.urlFotos=[''];
  }
   

  protected saveProyecto(titulo:string,descripcion:string,urlGitHub:string,urlAppWeb:string){
   
    this.proyecto = new Proyecto(titulo,descripcion,urlGitHub,urlAppWeb,this.urlFotos);

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
