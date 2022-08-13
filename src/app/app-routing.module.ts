import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHardSkillComponent } from './components/adds/add-hard-skill/add-hard-skill.component';
import { AddSoftSkillComponent } from './components/adds/add-soft-skill/add-soft-skill.component';
//import { HoverMode } from 'tsparticles-engine';
//import { AppComponent } from './app.component';
import { EditAboutMeComponent } from './components/edits/edit-about-me/edit-about-me.component';
import { EditHardSkillComponent } from './components/edits/edit-hard-skill/edit-hard-skill.component';
import { EditSoftSkillComponent } from './components/edits/edit-soft-skill/edit-soft-skill.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {path:"", component:MainPageComponent},
  {path:"login", component:LoginComponent},
  {path:"edit/about/me", component:EditAboutMeComponent},
  {path:"add/hard/skills" , component:AddHardSkillComponent},
  {path:"add/soft/skills" , component:AddSoftSkillComponent},
  { path: 'edit/hard/skills/:param_ID_hardSkill', component: EditHardSkillComponent},
  { path: 'edit/soft/skills/:param_ID_softSkill', component: EditSoftSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
