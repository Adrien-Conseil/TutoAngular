import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Module1Component } from './module1/module1.component';


const routes: Routes = [
{
  path :'',
  component : HomeComponent
},
{
  path :'module1',
  component : Module1Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
