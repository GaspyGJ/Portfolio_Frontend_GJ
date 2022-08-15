import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Educacion } from 'src/app/entitys/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { AddEducacionComponent } from '../../adds/add-educacion/add-educacion.component';
import { EditEducacionComponent } from '../../edits/edit-educacion/edit-educacion.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private matDialog: MatDialog, private educacionService: EducacionService) { }

  educaciones: Educacion[]

  ngOnInit(): void {
    this.obtenerEducaciones();
  }

  public obtenerEducaciones() {
    this.educacionService.getEducaciones().subscribe(dato => {
      this.educaciones = dato;
      this.educaciones.forEach(element => {
        if(element.anioEnd==""){
          element.anioEnd='Actualidad';
        }
      });
    })

    
  }

  protected addEducacion(){
    const popup = this.matDialog.open(AddEducacionComponent, {
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
    });
  
    popup.afterClosed().subscribe(i=>{
      this.obtenerEducaciones();
    })
  }

  protected editEducacion(id:number){
    const popup =this.matDialog.open(EditEducacionComponent, {
      data:{
        'id': id,
      },
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
    });
  
    popup.afterClosed().subscribe(i=>{
      this.obtenerEducaciones();
    })
  
  }

  protected dropEducacion(id:number){
      this.educacionService.deleteEducacion(id).subscribe(dato=>{
      let index_for_deleting= this.educaciones.findIndex(element => element.idEducacion === id);
 
      this.educaciones.splice(index_for_deleting,1);
   });
  }
}


