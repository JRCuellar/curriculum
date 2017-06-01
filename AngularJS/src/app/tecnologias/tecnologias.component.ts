import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  public tecnoList: any;

  constructor() { 
  	this.tecnoList=[
        {name: "React", url: "https://facebook.github.io/react/"},
        {name: "AngularJS", url: "https://angularjs.org/"},
        {name: "Ionic", url: "https://ionicframework.com/"},
        {name: "Typescript", url: "https://www.typescriptlang.org/"},
        {name: "NodeJS", url: "https://nodejs.org/es/"},
        {name: "PHP", url: "http://www.php.net/"}
    ];
  }

  ngOnInit() {
  }

}
