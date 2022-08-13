import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/main/banner/banner.component';
import { ContactComponent } from './components/main/contact/contact.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { SkillsComponent } from './components/main/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaComponent } from './components/main/experiencia/experiencia.component';
import { EducationComponent } from './components/main/education/education.component';

import { NgParticlesModule } from "ng-particles";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AboutMeComponent } from './components/main/about-me/about-me.component';

import {HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { EditAboutMeComponent } from './components/edits/edit-about-me/edit-about-me.component';
import { EditHardSkillComponent } from './components/edits/edit-hard-skill/edit-hard-skill.component';
import { EditSoftSkillComponent } from './components/edits/edit-soft-skill/edit-soft-skill.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddHardSkillComponent } from './components/adds/add-hard-skill/add-hard-skill.component';
import { AddSoftSkillComponent } from './components/adds/add-soft-skill/add-soft-skill.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent,
    FooterComponent,
    ExperienciaComponent,
    EducationComponent,
    AboutMeComponent,
    LoginComponent,
    MainPageComponent,
    EditAboutMeComponent,
    EditHardSkillComponent,
    EditSoftSkillComponent,
    AddHardSkillComponent,
    AddSoftSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
