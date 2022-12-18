import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { NgParticlesModule } from "ng-particles";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { interceptorProvider } from './service/JWT/interceptors/interceptor.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/main/banner/banner.component';
import { ContactComponent } from './components/main/contact/contact.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { SkillsComponent } from './components/main/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaComponent } from './components/main/experiencia/experiencia.component';
import { EducationComponent } from './components/main/education/education.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { EditAboutMeComponent } from './components/edits/edit-about-me/edit-about-me.component';
import { EditHardSkillComponent } from './components/edits/edit-hard-skill/edit-hard-skill.component';
import { EditSoftSkillComponent } from './components/edits/edit-soft-skill/edit-soft-skill.component';
import { EditEducacionComponent } from './components/edits/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './components/edits/edit-experiencia/edit-experiencia.component';
import { AddEducacionComponent } from './components/adds/add-educacion/add-educacion.component';
import { AddExperienciaComponent } from './components/adds/add-experiencia/add-experiencia.component';
import { AboutMeComponent } from './components/main/about-me/about-me.component';
import { AddProyectoComponent } from './components/adds/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './components/edits/edit-proyecto/edit-proyecto.component';
import { AddHardSkillComponent } from './components/adds/add-hard-skill/add-hard-skill.component';
import { AddSoftSkillComponent } from './components/adds/add-soft-skill/add-soft-skill.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { MainPreloadComponent } from './components/preload/main-preload/main-preload.component';
import { AboutMePreloadComponent } from './components/preload/aboutMe/about-me-preload/about-me-preload.component'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { EditSoftSillOrderComponent } from './components/edits/order/edit-soft-sill-order/edit-soft-sill-order.component';
import { EditHardSkillOrderComponent } from './components/edits/order/edit-hard-skill-order/edit-hard-skill-order.component';

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
    EditExperienciaComponent,
    AddExperienciaComponent,
    AddEducacionComponent,
    EditEducacionComponent,
    AddProyectoComponent,
    EditProyectoComponent,
    ParticlesComponent,
    MainPreloadComponent,
    AboutMePreloadComponent,
    EditSoftSillOrderComponent,
    EditHardSkillOrderComponent
  ],
  entryComponents:[
    EditHardSkillComponent,
    EditSoftSkillComponent,
    AddHardSkillComponent,
    AddSoftSkillComponent,
    LoginComponent,
    EditExperienciaComponent,
    EditEducacionComponent,
    AddProyectoComponent,
    EditProyectoComponent,
    EditSoftSillOrderComponent,
    EditHardSkillOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    NgbModule,
    MatProgressBarModule,
    DragDropModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
