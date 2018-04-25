import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Module1Component } from './module1/module1.component';
import { Quizz1homeComponent } from './quizz1home/quizz1home.component';


const routes: Routes = [
{
  path :'',
  component : HomeComponent
},
{
  path :'module1',
  component : Module1Component
},
{
  path :'quizz1home',
  component : Quizz1homeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
