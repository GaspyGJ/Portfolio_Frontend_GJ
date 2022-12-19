import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SoftSkill } from 'src/app/entitys/soft_skills';
import { SoftSkillService } from 'src/app/service/soft-skill.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-edit-soft-skill',
  templateUrl: './edit-soft-skill.component.html',
  styleUrls: ['./edit-soft-skill.component.css']
})
export class EditSoftSkillComponent implements OnInit {

  softSkill: SoftSkill;

  id: number;

  archivo: string;
  
  constructor(@Inject(MAT_DIALOG_DATA) public params:any, private referencia:MatDialogRef<EditSoftSkillComponent>, private softSkillService: SoftSkillService, private rutaActiva: ActivatedRoute) { }


  ngOnInit(): void {
    /*let id_softSkill = this.rutaActiva.paramMap.subscribe(params => {
      this.id = Number(params.get('param_ID_softSkill'));*/

      this.id= Number(this.params.id);

      this.softSkillService.getSoftSkill_byID(this.id).subscribe(dato => {
        this.softSkill = dato;
        this.archivo = this.softSkill.urlFoto;
      })
    //})
  }

  protected actualizar_soft_skill(porcentaje:string,titulo:string,alto:string,ancho:string) {

    let softSkill_Updated = new SoftSkill(Number(porcentaje),titulo,this.softSkill.numero_orden,this.archivo,Number(alto),Number(ancho));

    softSkill_Updated.idSoftSkill = this.softSkill.idSoftSkill;

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
    
  }


  obtenerArchivo(event:any):any{
    const archivoCapturado = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(archivoCapturado);
    reader.onload = () => {
      this.archivo=<string>reader.result
    }
  }

}
