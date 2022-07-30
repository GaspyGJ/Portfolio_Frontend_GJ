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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
