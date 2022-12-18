import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HardSkill } from 'src/app/entitys/hard_skill';
import { HardSkillService } from 'src/app/service/hard-skill.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-hard-skill',
  templateUrl: './add-hard-skill.component.html',
  styleUrls: ['./add-hard-skill.component.css']
})
export class AddHardSkillComponent implements OnInit {

  hardSkill:HardSkill;

  default_hardSkill:HardSkill;

  archivo: string;

  constructor(private hardSkillService:HardSkillService , private referencia: MatDialogRef<AddHardSkillComponent>) { 

    this.default_hardSkill = new HardSkill(100,15,15,'../../../../assets/imagenes/Skills/c++.png',-1);
  }

  ngOnInit(): void {
    
  }


  obtenerArchivo(event:any):any{
    const archivoCapturado = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(archivoCapturado);
    reader.onload = () => {
      this.archivo=<string>reader.result
    }
  }


  protected saveHardSkill(porcentaje: string, alto: string, ancho: string){
   
    this.hardSkill = new HardSkill(Number(porcentaje),Number(alto),Number(ancho),this.archivo,-1);

    this.hardSkillService.saveHardSkill(this.hardSkill).subscribe({
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