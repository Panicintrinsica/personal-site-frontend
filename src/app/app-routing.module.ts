import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {BiographyComponent} from './pages/biography/biography.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {ResumeComponent} from './pages/resume/resume.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'Home' }
  },
  {
    path: 'bio',
    component: BiographyComponent,
    data: { animation: 'Bio' }},
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 'Projects' }},
  {
    path: 'biography/builder',
    component: ResumeComponent,
    data: { animation: 'home' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
