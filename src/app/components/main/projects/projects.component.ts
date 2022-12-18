import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Proyecto } from 'src/app/entitys/proyecto';
import { TokenService } from 'src/app/service/JWT/token-service.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import Swal from 'sweetalert2';
import { AddProyectoComponent } from '../../adds/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from '../../edits/edit-proyecto/edit-proyecto.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  isLogged = false;

  constructor(private tokenService: TokenService, private matDialog: MatDialog, private proyectoService: ProyectoService) { }

  proyectos: Proyecto[]

  ngOnInit(): void {
    let elemento = document.getElementById("after-load")
    elemento!.style.display = "none";
    let elemento1 = document.getElementById("preloadProyectos")
    elemento1!.style.display = "block";

    this.obtenerProyectos();

    if (this.tokenService.getToken()) {
      //esta logeado
      this.isLogged = true;
    }
  }

  public obtenerProyectos() {
    this.proyectoService.getProyecto().subscribe(dato => {
      this.proyectos = dato;

      this.proyectos.sort( (p1, p2) => p1.numero_orden - p2.numero_orden );
      
      let elemento = document.getElementById("after-load")
      elemento!.style.display = "block";
      let elemento1 = document.getElementById("preloadProyectos")
      elemento1!.setAttribute( 'style', 'display: none !important' ); 
    });
  }


  protected addProyecto() {
    const popup = this.matDialog.open(AddProyectoComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      height: '75%'
    });

    popup.afterClosed().subscribe(i => {
      this.obtenerProyectos();
    })
  }

  protected editProyecto(id: number) {
    const popup = this.matDialog.open(EditProyectoComponent, {
      data: {
        'id': id,
      },
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      height: '75%'
    });

    popup.afterClosed().subscribe(i => {
      this.obtenerProyectos();
    })

  }

  protected dropProyecto(id: number) {
    Swal.fire({
      title: 'Seguro que desea eliminar?',
      text: "",
      icon: 'question',
      confirmButtonText: "Aceptar",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this.proyectoService.deleteProyecto(id).subscribe(dato => {
          let index_for_deleting = this.proyectos.findIndex(element => element.idProyecto === id);
          this.proyectos.splice(index_for_deleting, 1);
          Swal.fire({
            title: 'Eliminado',
            text: "Eliminado correctamente",
            icon: 'success',
            confirmButtonText: "Aceptar",
          });
        });
      }
    });

  }
}