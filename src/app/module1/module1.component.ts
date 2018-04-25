import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit {
reponseA: number = 0;
reponseB: number = 0;
reponseC: number = 0;
reponseD: number = 0;
  constructor() { }

  ngOnInit() {
  }
/*  onClickBtnQuizz1(){

  }onClickBtnQuizz1(){

  }*/
}
