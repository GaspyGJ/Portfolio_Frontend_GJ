import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardSkill } from 'src/app/entitys/hard_skill';
import { SoftSkill } from 'src/app/entitys/soft_skills';
import { HardSkillService } from 'src/app/service/hard-skill.service';
import { SoftSkillService } from 'src/app/service/soft-skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor( private router:Router ,private hardSkillService:HardSkillService , private softSkillService:SoftSkillService) { }

  hardSkills: HardSkill[];
  softSkills: SoftSkill[];

  ngOnInit(): void {
    this.obtenerHardSkills();
    this.obtenerSoftSkills();
  }

  protected obtenerHardSkills(){
      this.hardSkillService.getHardSkill().subscribe(dato=>{
      this.hardSkills = dato;
    })
  }
  protected obtenerSoftSkills(){
    this.softSkillService.getHardSkill().subscribe(dato=>{
    this.softSkills= dato;
  })
}

protected dropHardSkill(id:number){

  //AGREGAR ADVERTENCIA ANTES DE ELIMINAR EL ELEMENTO

  this.hardSkillService.deleteHardSkill(id).subscribe(dato=>{
     let index_for_deleting= this.hardSkills.findIndex(element => element.idHardSkill === id);

     this.hardSkills.splice(index_for_deleting,1);

  });

}

protected editHardSkill(id:number){

    this.router.navigate([`edit/hard/skills/${id}`]);
    // ir a ruta (pasarle el id por parametro)para editar la skill, 
    // indicarle el ID que debe utilizar 
    //{ path: 'edit/hard/skills/:id', component: EditHardSkillComponent}
}

protected dropSoftSkill(id:number){
  //AGREGAR ADVERTENCIA ANTES DE ELIMINAR EL ELEMENTO

  this.softSkillService.deleteSoftSkill(id).subscribe(dato=>{
     let index_for_deleting= this.softSkills.findIndex(element => element.idSoftSkill === id);

     this.softSkills.splice(index_for_deleting,1);

  });

}

protected editSoftSkill(id:number){
  this.router.navigate([`edit/soft/skills/${id}`]);
}

}