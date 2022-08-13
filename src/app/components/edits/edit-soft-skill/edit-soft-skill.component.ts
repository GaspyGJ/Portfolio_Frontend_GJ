import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SoftSkill } from 'src/app/entitys/soft_skills';
import { SoftSkillService } from 'src/app/service/soft-skill.service';

@Component({
  selector: 'app-edit-soft-skill',
  templateUrl: './edit-soft-skill.component.html',
  styleUrls: ['./edit-soft-skill.component.css']
})
export class EditSoftSkillComponent implements OnInit {

  constructor(private softSkillService: SoftSkillService, private rutaActiva: ActivatedRoute) { }

  softSkill: SoftSkill;

  id: number;

  ngOnInit(): void {
    let id_softSkill = this.rutaActiva.paramMap.subscribe(params => {
      this.id = Number(params.get('param_ID_softSkill'));

      
    console.log("Pase por aca");

      this.softSkillService.getSoftSkill_byID(this.id).subscribe(dato => {
        this.softSkill = dato;
      })
    })
  }

  protected actualizar_soft_skill(porcentaje:string,titulo:string,fontSize:string) {

    let softSkill_Updated = new SoftSkill(Number(porcentaje), fontSize,titulo);

    softSkill_Updated.idSoftSkill = this.softSkill.idSoftSkill;

    this.softSkillService.saveSoftSkill(softSkill_Updated).subscribe(dato => { })

  }

}
