import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Module1Component } from './module1/module1.component';
import { Quizz1homeComponent } from './quizz1home/quizz1home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Module1Component,
    Quizz1homeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
