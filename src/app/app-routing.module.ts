import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';


// const routes: Routes = [
//   {path: 'home', component:HomeComponent},
//   {path: 'aboutMe', component:SkillsComponent},
//   {path: 'works', component:WorksComponent}
// ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]


})
export class AppRoutingModule { }
