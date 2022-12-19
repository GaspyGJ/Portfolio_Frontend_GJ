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

  archivo: string;

  constructor(private softSkillService:SoftSkillService,private referencia: MatDialogRef<AddSoftSkillComponent>) { }

  ngOnInit(): void {
    this.default_softSkill= new SoftSkill(100,'Titulo',-1,'',120,110);
  }


  obtenerArchivo(event:any):any{
    const archivoCapturado = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(archivoCapturado);
    reader.onload = () => {
      this.archivo=<string>reader.result
    }
  }

  protected saveSoftSkill(porcentaje:string,titulo:string,alto:string,ancho:string){
   
    this.softSkill = new SoftSkill(Number(porcentaje),titulo,this.default_softSkill.numero_orden,this.archivo,Number(alto),Number(ancho));

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
