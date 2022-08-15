import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Educacion } from 'src/app/entitys/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {

  educacion:Educacion;
  default_Educacion:Educacion;

  constructor(private educacionService:EducacionService , private referencia: MatDialogRef<AddEducacionComponent>) {
    this.default_Educacion = new Educacion("Titulo Ejemplo 1","Descripcion Ejemplo 1","2022","","Cursando");
   }

  ngOnInit(): void { }

  protected saveEducacion(titulo:string,descripcion:string,anioStart:string,anioEnd:string,estadoActual:string){
 
    this.educacion = new Educacion(titulo,descripcion,anioStart,anioEnd,estadoActual);
  
    this.educacionService.saveEducacion(this.educacion).subscribe(dato=>{})
  
    this.referencia.close("Cerrando");
  }

}





