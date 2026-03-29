import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { PreviewComponent } from './components/preview/preview.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



import { firebaseConfig } from '../../environment';
import { Template1Component } from './components/UI/template1/template1.component';
import { Template2Component } from './components/UI/template2/template2.component';
import { Template3Component } from './components/UI/template3/template3.component';
import { Template4Component } from './components/UI/template4/template4.component';
import { RevealDirective } from './components/directives/reveal.directive';
import { PublicPortfolioComponent } from './components/pages/public-portfolio/public-portfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    SkillsComponent,
    ProjectsComponent,
    SocialLinksComponent,
    TemplatesComponent,
    PreviewComponent,
    LoginComponent,
    RegisterComponent,
    Template1Component,
    Template2Component,
    Template3Component,
    Template4Component,
    RevealDirective,
    PublicPortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  //  BrowserAnimationsModule,
  //   ToastrModule.forRoot({
  //     positionClass: 'toast-top-right',
  //     timeOut: 3000,
  //     progressBar: true,
  //     closeButton: true
  //   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
