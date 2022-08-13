import { Component, OnInit } from '@angular/core';
import { HardSkill } from 'src/app/entitys/hard_skill';
import { HardSkillService } from 'src/app/service/hard-skill.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-hard-skill',
  templateUrl: './edit-hard-skill.component.html',
  styleUrls: ['./edit-hard-skill.component.css']
})
export class EditHardSkillComponent implements OnInit {


  constructor(private hardSkillService: HardSkillService, private rutaActiva: ActivatedRoute) { }

  hardSkill: HardSkill;

  id: number;

  ngOnInit(): void {
    let id_hardSkill = this.rutaActiva.paramMap.subscribe(params => {

      this.id = Number(params.get('param_ID_hardSkill'));

      this.hardSkillService.getHardSkill_byID(this.id).subscribe(dato => {
        this.hardSkill = dato;
      })


    })
  }

  protected actualizar_hard_skill(porcentaje: string, alto: string, ancho: string, urlFoto: string) {

      let hardSkill_Updated = new HardSkill(Number(porcentaje),Number(alto),Number(ancho),urlFoto);
      hardSkill_Updated.idHardSkill= this.hardSkill.idHardSkill;

    this.hardSkillService.saveHardSkill(hardSkill_Updated).subscribe(dato => { })

  }

}
