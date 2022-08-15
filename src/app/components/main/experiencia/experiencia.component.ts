import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experiencia } from 'src/app/entitys/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { AddExperienciaComponent } from '../../adds/add-experiencia/add-experiencia.component';
import { EditExperienciaComponent } from '../../edits/edit-experiencia/edit-experiencia.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor(private matDialog: MatDialog, private experienciaService: ExperienciaService) { }

  experiencias: Experiencia[]

  ngOnInit(): void {
    this.obtenerExperiencias();
  }

  public obtenerExperiencias() {
    this.experienciaService.getExperiencias().subscribe(dato => {
      this.experiencias = dato;
      this.experiencias.forEach(element => {
        if(element.anioEnd==""){
          element.anioEnd='Actualidad';
        }
      });
    })
  }

  protected addExperiencia(){
    const popup = this.matDialog.open(AddExperienciaComponent, {
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      height:'90%'
    });
  
    popup.afterClosed().subscribe(i=>{
      this.obtenerExperiencias();
    })
  }

  protected editExperiencia(id:number){
    const popup =this.matDialog.open(EditExperienciaComponent, {
      data:{
        'id': id,
      },
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      height:'90%'
    });
  
    popup.afterClosed().subscribe(i=>{
      this.obtenerExperiencias();
    })
  
  }

  protected dropExperiencia(id:number){
      this.experienciaService.deleteExperiencia(id).subscribe(dato=>{
      let index_for_deleting= this.experiencias.findIndex(element => element.idExperiencia === id);
 
      this.experiencias.splice(index_for_deleting,1);
   });
  }
}