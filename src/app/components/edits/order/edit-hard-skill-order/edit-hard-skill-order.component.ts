import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HardSkillService } from 'src/app/service/hard-skill.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2';
import { HardSkill } from 'src/app/entitys/hard_skill';


@Component({
  selector: 'app-edit-hard-skill-order',
  templateUrl: './edit-hard-skill-order.component.html',
  styleUrls: ['./edit-hard-skill-order.component.css']
})
export class EditHardSkillOrderComponent implements OnInit {

  hardSkills:HardSkill[];

  constructor(@Inject(MAT_DIALOG_DATA) public params: any, private referencia: MatDialogRef<EditHardSkillOrderComponent>, private hardSkillService: HardSkillService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.hardSkills = this.params.hardSkills;
  }

  aceptar(){

    let listaLI = document.getElementsByClassName("li_hs");

    for (let i=0; i<listaLI.length; i++) {
      for(let j=0; j<this.hardSkills.length;j++){
        if( listaLI[i].id.includes( (this.hardSkills[j].idHardSkill).toString() ) ){
          this.hardSkills[j].numero_orden=i;
        }
      }
    }
    this.hardSkills.sort( (ss1, ss2) => ss1.numero_orden - ss2.numero_orden);

    this.hardSkills.forEach(hardSkill => {
      
      let hardSkill_Updated = new HardSkill(Number(hardSkill.porcentaje),Number(hardSkill.alto),Number(hardSkill.ancho),hardSkill.urlFoto,hardSkill.numero_orden);

      hardSkill_Updated.idHardSkill = hardSkill.idHardSkill;
  
      this.hardSkillService.saveHardSkill(hardSkill_Updated).subscribe({
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

  DropeoHardSkill(event: CdkDragDrop<any>) {
    const anterior: number = event.previousIndex;
    const actual: number = event.currentIndex;
    moveItemInArray(this.hardSkills, anterior, actual);
  }

}
