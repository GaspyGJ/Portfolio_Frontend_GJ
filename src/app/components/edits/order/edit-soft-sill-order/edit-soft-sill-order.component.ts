import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoftSkill } from 'src/app/entitys/soft_skills';
import { SoftSkillService } from 'src/app/service/soft-skill.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-soft-sill-order',
  templateUrl: './edit-soft-sill-order.component.html',
  styleUrls: ['./edit-soft-sill-order.component.css']
})
export class EditSoftSillOrderComponent implements OnInit {


  softSkills: SoftSkill[];

  constructor(@Inject(MAT_DIALOG_DATA) public params: any, private referencia: MatDialogRef<EditSoftSillOrderComponent>, private softSkillService: SoftSkillService, private rutaActiva: ActivatedRoute) { }


  ngOnInit(): void {
    this.softSkills = this.params.softSkills;
  }

  aceptar(){

    let listaP = document.getElementsByClassName("p-lista");

    for (let i=0; i<listaP.length; i++) {
      for(let j=0; j<this.softSkills.length;j++){
        if( listaP[i].innerHTML.includes( this.softSkills[j].titulo) ){
          this.softSkills[j].numero_orden=i;
        }
      }
    }
    this.softSkills.sort((ss1, ss2) => ss1.numero_orden - ss2.numero_orden);

    
    this.softSkills.forEach(softSkill => {
      
      let softSkill_Updated = new SoftSkill(Number(softSkill.porcentaje),softSkill.fontSize,softSkill.titulo,softSkill.numero_orden);

      softSkill_Updated.idSoftSkill = softSkill.idSoftSkill;
  
      this.softSkillService.saveSoftSkill(softSkill_Updated).subscribe({
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

    });

  }

  DropeoSoftSkill(event: CdkDragDrop<any>) {
    const anterior: number = event.previousIndex;
    const actual: number = event.currentIndex;

    moveItemInArray(this.softSkills, anterior, actual);

  }


}
