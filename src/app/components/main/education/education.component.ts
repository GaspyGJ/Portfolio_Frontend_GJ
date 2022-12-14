import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Educacion } from 'src/app/entitys/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/JWT/token-service.service';
import { AddEducacionComponent } from '../../adds/add-educacion/add-educacion.component';
import { EditEducacionComponent } from '../../edits/edit-educacion/edit-educacion.component';
import { EditEducacionOrderComponent } from '../../edits/order/edit-educacion-order/edit-educacion-order.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  isLogged = false;
  isLoad = false;

  constructor(private tokenService: TokenService, private matDialog: MatDialog, private educacionService: EducacionService) { }

  educaciones: Educacion[]

  ngOnInit(): void {

    this.obtenerEducaciones();

    if(this.tokenService.getToken()){
      this.isLogged=true;
    }

  }

  public obtenerEducaciones() {
    
    this.educacionService.getEducaciones().subscribe(dato => {
      this.educaciones = dato;

      this.educaciones.sort( (e1, e2) => e1.numero_orden - e2.numero_orden );

      this.educaciones.forEach(element => {
        if(element.anioEnd==""){
          element.anioEnd='Actualidad';
        }
      });

      this.isLoad = true;

    })

    
  }

  protected addEducacion(){
    const popup = this.matDialog.open(AddEducacionComponent, {
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      height:'75%'
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
      height:'75%'
    });
  
    popup.afterClosed().subscribe(i=>{
      this.obtenerEducaciones();
    })
  
  }

  
  protected editOrdenEducation(){

    const popup = this.matDialog.open(EditEducacionOrderComponent, {
      data: {
        'educaciones': this.educaciones,
      },
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });

    popup.afterClosed().subscribe(i => {
      this.obtenerEducaciones();
    })

  }

  protected dropEducacion(id:number){
    Swal.fire({
      title: 'Seguro que desea eliminar?',
      text: "",
      icon: 'question',
      confirmButtonText: "Aceptar",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this.educacionService.deleteEducacion(id).subscribe(dato => {
          let index_for_deleting = this.educaciones.findIndex(element => element.idEducacion === id);
          this.educaciones.splice(index_for_deleting, 1);
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


