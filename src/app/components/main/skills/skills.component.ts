import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HardSkill } from 'src/app/entitys/hard_skill';
import { SoftSkill } from 'src/app/entitys/soft_skills';
import { HardSkillService } from 'src/app/service/hard-skill.service';
import { SoftSkillService } from 'src/app/service/soft-skill.service';
import { AddHardSkillComponent } from '../../adds/add-hard-skill/add-hard-skill.component';
import { AddSoftSkillComponent } from '../../adds/add-soft-skill/add-soft-skill.component';
import { EditHardSkillComponent } from '../../edits/edit-hard-skill/edit-hard-skill.component';
import { EditSoftSkillComponent } from '../../edits/edit-soft-skill/edit-soft-skill.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor( private matDialog:MatDialog ,private router:Router ,private hardSkillService:HardSkillService , private softSkillService:SoftSkillService) { }

  hardSkills: HardSkill[];
  softSkills: SoftSkill[];

  ngOnInit(): void {
    this.obtenerHardSkills();
    this.obtenerSoftSkills();
  }

  public obtenerHardSkills(){
      this.hardSkillService.getHardSkill().subscribe(dato=>{
      this.hardSkills = dato;
    })
  }
  protected obtenerSoftSkills(){
    this.softSkillService.getHardSkill().subscribe(dato=>{
    this.softSkills= dato;
  })
}

protected addHardSkill(){

  const popup =this.matDialog.open(AddHardSkillComponent, {
    enterAnimationDuration:'1000ms',
    exitAnimationDuration:'1000ms',
  });

  popup.afterClosed().subscribe(i=>{
    this.obtenerHardSkills();
  })
}

protected addSoftSkill(){

  const popup = this.matDialog.open(AddSoftSkillComponent, {
    enterAnimationDuration:'1000ms',
    exitAnimationDuration:'1000ms',
  });

  popup.afterClosed().subscribe(i=>{
    this.obtenerSoftSkills();
  })

}

protected dropHardSkill(id:number){

  //AGREGAR ADVERTENCIA ANTES DE ELIMINAR EL ELEMENTO

  this.hardSkillService.deleteHardSkill(id).subscribe(dato=>{
     let index_for_deleting= this.hardSkills.findIndex(element => element.idHardSkill === id);

     this.hardSkills.splice(index_for_deleting,1);

  });
}

protected dropSoftSkill(id:number){
  //AGREGAR ADVERTENCIA ANTES DE ELIMINAR EL ELEMENTO

  this.softSkillService.deleteSoftSkill(id).subscribe(dato=>{
     let index_for_deleting= this.softSkills.findIndex(element => element.idSoftSkill === id);

     this.softSkills.splice(index_for_deleting,1);

  });
}

protected editHardSkill(id:number){

 const popup = this.matDialog.open(EditHardSkillComponent, {
    data:{
      'id': id,

    },
    enterAnimationDuration:'1000ms',
    exitAnimationDuration:'1000ms',
  }); 

  popup.afterClosed().subscribe(i=>{
    this.obtenerHardSkills();
  })
    //this.router.navigate([`edit/hard/skills/${id}`]);
    // ir a ruta (pasarle el id por parametro)para editar la skill, 
    // indicarle el ID que debe utilizar 
    //{ path: 'edit/hard/skills/:id', component: EditHardSkillComponent}
}

protected editSoftSkill(id:number){
  const popup =this.matDialog.open(EditSoftSkillComponent, {
    data:{
      'id': id,
    },
    enterAnimationDuration:'1000ms',
    exitAnimationDuration:'1000ms',
  });

  popup.afterClosed().subscribe(i=>{
    this.obtenerSoftSkills();
  })

  //para el otro metodo de nueva URL
  //this.router.navigate([`edit/soft/skills/${id}`]);
}

}