import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  public nombre:        string;
  public sexo:          string;
  public fnacimiento:   string;
  public email:         string;
  public poblacion:     string;
  public provincia:     string;
  public telefono:      string;

  constructor() { 
		this.nombre       = "Javier Ramos Cuellar";
		this.sexo         = "Hombre";
    this.fnacimiento  = "27/03/1981";
		this.email 	      = "javier.ramos.cuellar@gmail.com";
		this.poblacion    = "Móstoles";
		this.provincia    = "Madrid";
		this.telefono     = "667671082"
  }

  ngOnInit() {}

}
