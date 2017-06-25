import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  
  public expList: any;

  constructor() { 
  	this.expList = [
      					{
      						company: "Facilisimo.com", 
      						from: "Desde septiembre de 2006", 
      						description: "Actualmente trabajando desde septiembre del año 2006 para facilisimo.com, un website que aglutina contenidos sobre diferentes ambitos de la vida, como pueden ser recetas de cocina, manualidades, decoración, salud, ecología e incluso belleza, dando consejos e ideas que mejoran tu vida.<br/><br/>Mis comienzos en esta empresa no fueron precisamente en www.facilisimo.com. Empeze en www.expocasa.com, por el entonces el tercer mayor portal inmobiliario del país. Pero con la crisis la empresa se centró en lo que es hoy en día y pasé al departamento mobile. Alli empeze desarrollando la versión web mobile de www.facilisimo.com y tras terminar dicho reto dimos el salto a Ionic 1 para empezar a desarrollar la app que hoy en día se puede descargar tanto para Android como para iOs. Con Ionic y AngularJS llevo 2 años de experiencia con este framework, y actualmente con Ionic 3, AngularJS 4 y TypeScript. Para ello trabajo con dos equipos, un Mac mini con Mac OS Sierra y Xcode, para la versión de IOS y un Fedora para la versión de Android y el resto de proyectos.<br/><br/>Otro de mis proyectos con los que estoy trabajando es una aplicación orientada a la Salud. Estoy trabajando en colaboración con una empresa India que se estan encargando de hacer el front-end y yo el back-end mediante un webserve en python. El equipo del front-end estan desarrollando la aplicación en Android Nativo y en Swift. Cuando terminen el desarrollo, las futuras modificaciones irán a cargo de nuestro departamento.<br/><br/>Por otro lado también mantengo la obtención de la materia prima de nuestra empresa, el contenido. RED facilisimo es una red de bloggeros que nos permiten absorver su contenido y nosotros les promocionamos en nuestras redes sociales, para darles visibilidad. Actualmente sincronizo más de 5.000 blogs mediante procesos pesados realizados con Python."
      					},
      					{
      						company: "Axelspringer", 
      						from: "Desde octubre de 2005 hasta septiembre de 2006", 
      						description: "En Axelspringer, editora de revistas como HobbyConsolas, PCComputer, etc., estube desarrollando la web de www.autobild.es a través de PHP, mysql, jquery y AJAX. También acople en dicha web un comparador de coches con ASP.<br><br>Otros proyectos en los que estuve involucrado fue en la aplicación web del PCLab (laboratorio de pruebas de la empresa), encuestas webs, su CRM interno y diversas herramientas internas."
      					},
      					{
      						company: "RSA - Redes de Soluciones Avanzadas", 
      						from: "Desde diciembre de 2004 hasta junio de 2005", 
      						description: "En esta empresa empeze mi andadura profesional como becario desarrollando proyectos internos y externos para clientes en PHP 5, mysql y XML."
      					}
    ];
  }

  ngOnInit() {
  }

}
