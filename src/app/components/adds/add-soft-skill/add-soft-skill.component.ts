import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SoftSkill } from 'src/app/entitys/soft_skills';
import { SoftSkillService } from 'src/app/service/soft-skill.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-soft-skill',
  templateUrl: './add-soft-skill.component.html',
  styleUrls: ['./add-soft-skill.component.css']
})
export class AddSoftSkillComponent implements OnInit {

  softSkill:SoftSkill;
  default_softSkill:SoftSkill;

  constructor(private softSkillService:SoftSkillService,private referencia: MatDialogRef<AddSoftSkillComponent>) { 

    this.default_softSkill= new SoftSkill(100,'15','Responsabilidad');
  }

  ngOnInit(): void {
    
  }

  protected saveSoftSkill(porcentaje:string, fontSize:string , titulo:string ){
   
    this.softSkill = new SoftSkill(Number(porcentaje),fontSize,titulo);

    this.softSkillService.saveSoftSkill(this.softSkill).subscribe({
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
