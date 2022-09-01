import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HardSkill } from 'src/app/entitys/hard_skill';
import { SoftSkill } from 'src/app/entitys/soft_skills';
import { HardSkillService } from 'src/app/service/hard-skill.service';
import { TokenService } from 'src/app/service/JWT/token-service.service';
import { SoftSkillService } from 'src/app/service/soft-skill.service';
import Swal from 'sweetalert2';
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

  isLogged = false;

  constructor(private tokenService: TokenService, private matDialog: MatDialog, private router: Router, private hardSkillService: HardSkillService, private softSkillService: SoftSkillService) { }

  hardSkills: HardSkill[];
  softSkills: SoftSkill[];

  ngOnInit(): void {

    let elemento = document.getElementById("after-load")
    elemento!.style.display = "none";
    let elemento2 = document.getElementById("after-load2")
    elemento2!.style.display = "none";

    let elemento1 = document.getElementById("preloadHard")
    elemento1!.style.display = "block";
    let elemento3 = document.getElementById("preloadSoft")
    elemento3!.style.display = "block";

    this.obtenerHardSkills();
    this.obtenerSoftSkills();

    if (this.tokenService.getToken()) {
      //esta logeado
      this.isLogged = true;
    }
  }

  public obtenerHardSkills() {
    this.hardSkillService.getHardSkill().subscribe(dato => {
      this.hardSkills = dato;

      let elemento = document.getElementById("after-load")
      elemento!.style.display = "block";

      let elemento1 = document.getElementById("preloadHard")
      elemento1!.style.display = "none";

    })
  }
  protected obtenerSoftSkills() {
    this.softSkillService.getHardSkill().subscribe(dato => {
      this.softSkills = dato;

      let elemento = document.getElementById("after-load2")
      elemento!.style.display = "block";

      let elemento2 = document.getElementById("preloadSoft")
      elemento2!.style.display = "none";

    })
  }

  protected addHardSkill() {
    const popup = this.matDialog.open(AddHardSkillComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });

    popup.afterClosed().subscribe(i => {
      this.obtenerHardSkills();
    })
  }

  protected addSoftSkill() {

    const popup = this.matDialog.open(AddSoftSkillComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });

    popup.afterClosed().subscribe(i => {
      this.obtenerSoftSkills();
    })

  }

  protected dropHardSkill(id: number) {

    Swal.fire({
      title: 'Seguro que desea eliminar?',
      text: "",
      icon: 'question',
      confirmButtonText: "Aceptar",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this.hardSkillService.deleteHardSkill(id).subscribe(dato => {
          let index_for_deleting = this.hardSkills.findIndex(element => element.idHardSkill === id);
          this.hardSkills.splice(index_for_deleting, 1);
          Swal.fire({
            title: 'Eliminado',
            text: "Eliminado correctamente",
            icon: 'success',
            confirmButtonText: "Aceptar",
          });
        });
      }
    });
  }

  protected dropSoftSkill(id: number) {
    Swal.fire({
      title: 'Seguro que desea eliminar?',
      text: "",
      icon: 'question',
      confirmButtonText: "Aceptar",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this.softSkillService.deleteSoftSkill(id).subscribe(dato => {
          let index_for_deleting = this.softSkills.findIndex(element => element.idSoftSkill === id);
          this.softSkills.splice(index_for_deleting, 1);
          Swal.fire({
            title: 'Eliminado',
            text: "Eliminado correctamente",
            icon: 'success',
            confirmButtonText: "Aceptar",
          });
        });
      }
    });
  }

  protected editHardSkill(id: number) {

    const popup = this.matDialog.open(EditHardSkillComponent, {
      data: {
        'id': id,

      },
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });

    popup.afterClosed().subscribe(i => {
      this.obtenerHardSkills();
    })
    //this.router.navigate([`edit/hard/skills/${id}`]);
    // ir a ruta (pasarle el id por parametro)para editar la skill, 
    // indicarle el ID que debe utilizar 
    //{ path: 'edit/hard/skills/:id', component: EditHardSkillComponent}
  }

  protected editSoftSkill(id: number) {
    const popup = this.matDialog.open(EditSoftSkillComponent, {
      data: {
        'id': id,
      },
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });

    popup.afterClosed().subscribe(i => {
      this.obtenerSoftSkills();
    })

    //para el otro metodo de nueva URL
    //this.router.navigate([`edit/soft/skills/${id}`]);
  }

}