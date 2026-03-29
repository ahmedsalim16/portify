import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { PreviewComponent } from './components/preview/preview.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PublicPortfolioComponent } from './components/pages/public-portfolio/public-portfolio.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  // ✅ هنا برا الـ dashboard
  { path: 'portfolio/:username', component: PublicPortfolioComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'social-links', component: SocialLinksComponent },
      { path: 'templates', component: TemplatesComponent },
      { path: 'preview', component: PreviewComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
