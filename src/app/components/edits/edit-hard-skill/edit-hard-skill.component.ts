import { Component, Inject, OnInit } from '@angular/core';
import { HardSkill } from 'src/app/entitys/hard_skill';
import { HardSkillService } from 'src/app/service/hard-skill.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-hard-skill',
  templateUrl: './edit-hard-skill.component.html',
  styleUrls: ['./edit-hard-skill.component.css']
})
export class EditHardSkillComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public params: any, private referencia: MatDialogRef<EditHardSkillComponent>, private hardSkillService: HardSkillService, private rutaActiva: ActivatedRoute) { }

  hardSkill: HardSkill;

  id: number;

  archivo: string;

  ngOnInit(): void {

    /*Metodo alternativo de otra pestania
      let id_hardSkill = this.rutaActiva.paramMap.subscribe(params => {
      this.id = Number(params.get('param_ID_hardSkill'));*/

    this.id = Number(this.params.id)

    //el id lo saco como un parametro q se le manda a la ventana emergente antes de abrirse.
    this.hardSkillService.getHardSkill_byID(this.id).subscribe(dato => {
      this.hardSkill = dato;
      this.archivo = this.hardSkill.urlFoto;
    })


    //})
  }


  obtenerArchivo(event:any):any{
    const archivoCapturado = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(archivoCapturado);
    reader.onload = () => {
      this.archivo=<string>reader.result
    }
  }


  protected actualizar_hard_skill(porcentaje: string, titulo:string ,alto: string, ancho: string) {

    let hardSkill_Updated = new HardSkill(Number(porcentaje),titulo,Number(alto), Number(ancho), this.archivo, this.hardSkill.numero_orden);

    hardSkill_Updated.idHardSkill = this.hardSkill.idHardSkill;

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
  }

}
