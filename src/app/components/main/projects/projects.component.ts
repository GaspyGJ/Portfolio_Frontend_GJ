import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Proyecto } from 'src/app/entitys/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { AddProyectoComponent } from '../../adds/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from '../../edits/edit-proyecto/edit-proyecto.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  constructor(private matDialog: MatDialog, private proyectoService: ProyectoService) { }

  proyectos: Proyecto[]

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  public obtenerProyectos() {
    this.proyectoService.getProyecto().subscribe(dato => {
      this.proyectos = dato;
      });
  }

  
  protected addProyecto(){
    const popup = this.matDialog.open(AddProyectoComponent, {
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      height:'90%'
    });
  
    popup.afterClosed().subscribe(i=>{
      this.obtenerProyectos();
    })
  }

  protected editProyecto(id:number){
    const popup =this.matDialog.open(EditProyectoComponent, {
      data:{
        'id': id,
      },
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      height:'90%'
    });
  
    popup.afterClosed().subscribe(i=>{
      this.obtenerProyectos();
    })
  
  }
  

  protected dropProyecto(id:number){
      this.proyectoService.deleteProyecto(id).subscribe(dato=>{
      let index_for_deleting= this.proyectos.findIndex(element => element.idProyecto === id);
      this.proyectos.splice(index_for_deleting,1);
   });
  }
}