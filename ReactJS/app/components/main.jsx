import React from 'react';
import ReactDOM from 'react-dom';

class DatosPersonales extends React.Component{
  constructor(){
  	super();

  	this.state = {
  			nombre: 		"Javier Ramos Cuellar",
  			sexo: 			"Hombre",
  			fnacimiento: 	"27/03/1981",
  			email: 			"javier.ramos.cuellar@gmail.com",
  			poblacion: 		"Móstoles",
  			provincia: 		"Madrid",
  			telefono: 		"667671082"
  		}
  }

  render(){
    return (
    	<div className="container">
			<h1>Datos personales:</h1>
			<div className="caja">
				<img src="https://eliaslealblog.files.wordpress.com/2014/03/user-200.png" />
				<ul>
					<li><b>Nombre:</b><br/>&nbsp;&nbsp;{this.state.nombre}</li>
					<li><b>Sexo:</b><br/>&nbsp;&nbsp;{this.state.sexo}</li>
					<li><b>Fecha de nacimiento:</b><br/>&nbsp;&nbsp;{this.state.fnacimiento}<br/><br/></li>					
					<li><b>Email:</b><br/>&nbsp;&nbsp;{this.state.email}</li>
					<li><b>Población:</b><br/>&nbsp;&nbsp;{this.state.poblacion}</li>
					<li><b>Provincia:</b><br/>&nbsp;&nbsp;{this.state.provincia}</li>
					<li><b>Teléfono:</b><br/>&nbsp;&nbsp;{this.state.telefono}</li>
				</ul>
			</div>
		</div>
	)
  }
}

class Tecnologias extends React.Component{
  render(){
    var tecnoList=[
        {name: "React", url: "https://facebook.github.io/react/"},
        {name: "AngularJS", url: "https://angularjs.org/"},
        {name: "Ionic", url: "https://ionicframework.com/"},
        {name: "Typescript", url: "https://www.typescriptlang.org/"},
        {name: "NodeJS", url: "https://nodejs.org/es/"},
        {name: "PHP", url: "http://www.php.net/"}
    ];

    return (
        <div className="container_2">
        <h1>Tecnologías conocidas:</h1>
        <div className="caja_2">
            <Tecnologia tecno={tecnoList} />
        </div>  
        </div>
    );
  }
}

class Tecnologia extends React.Component{
  render(){
     console.log('Renderizando el componente Tecnologia')
     var tecno = this.props.tecno.map(function (data,index) {
      
      return (
          <li className="tecnologia" key={index}>
                &#187; {data.name} <br/>
                <a href="{data.url}" title="{data.name}">{data.url}</a>
          </li>
        );
      });

    return (
      <ul>{tecno}</ul>
      )
  }
}


class Experiencias extends React.Component{
  render(){
    var expList=[
      {company: "Facilisimo.com", from:"Desde septiembre de 2006", description: "Actualmente trabajando desde septiembre del año 2006 para facilisimo.com, un website que aglutina contenidos sobre diferentes ambitos de la vida, como pueden ser recetas de cocina, manualidades, decoración, salud, ecología e incluso belleza, dando consejos e ideas que mejoran tu vida.<br/><br/>Mis comienzos en esta empresa no fueron precisamente en www.facilisimo.com. Empeze en www.expocasa.com, por el entonces el tercer mayor portal inmobiliario del país. Pero con la crisis la empresa se centró en lo que es hoy en día y pasé al departamento mobile. Alli empeze desarrollando la versión web mobile de www.facilisimo.com y tras terminar dicho reto dimos el salto a Ionic 1 para empezar a desarrollar la app que hoy en día se puede descargar tanto para Android como para iOs. Con Ionic y AngularJS llevo 2 años de experiencia con este framework, y actualmente con Ionic 3, AngularJS 4 y TypeScript. Para ello trabajo con dos equipos, un Mac mini con Mac OS Sierra y Xcode, para la versión de IOS y un Fedora para la versión de Android y el resto de proyectos.<br/><br/>Otro de mis proyectos con los que estoy trabajando es una aplicación orientada a la Salud. Estoy trabajando en colaboración con una empresa India que se estan encargando de hacer el front-end y yo el back-end mediante un webserve en python. El equipo del front-end estan desarrollando la aplicación en Android Nativo y en Swift. Cuando terminen el desarrollo, las futuras modificaciones irán a cargo de nuestro departamento.<br/><br/>Por otro lado también mantengo la obtención de la materia prima de nuestra empresa, el contenido. RED facilisimo es una red de bloggeros que nos permiten absorver su contenido y nosotros les promocionamos en nuestras redes sociales, para darles visibilidad. Actualmente sincronizo más de 5.000 blogs mediante procesos pesados realizados con Python."},
      {company: "Axelspringer", from:"Desde octubre de 2005 hasta septiembre de 2006", description:"En Axelspringer, editora de revistas como HobbyConsolas, PCComputer, etc., estube desarrollando la web de www.autobild.es a través de PHP, mysql, jquery y AJAX. También acople en dicha web un comparador de coches con ASP.<br><br>Otros proyectos en los que estuve involucrado fue en la aplicación web del PCLab (laboratorio de pruebas de la empresa), encuestas webs, su CRM interno y diversas herramientas internas."},
      {company: "RSA - Redes de Soluciones Avanzadas", from:"Desde diciembre de 2004 hasta junio de 2005", description: "En esta empresa empeze mi andadura profesional como becario desarrollando proyectos internos y externos para clientes en PHP 5, mysql y XML."}
    ];

    return (
      <div className="container_3">
        <h1>Experiencia Laboral:</h1>
        <div className="caja_3">
            <Experiencia exp={expList} />
        </div>
      </div>
    );
  }
}

class Experiencia extends React.Component{
  render(){
     console.log('Renderizando el componente Experiencia')

     var exp = this.props.exp.map(function (data,index){
        return (
          <div className="experiencia" key={index}>
          <h2>&#187; {data.company} ({data.from})</h2>
          <p>{data.description}</p>
          </div>
        )
     });

     return (
        <div>{exp}</div>
     )
  }
}

ReactDOM.render(
  <DatosPersonales />,
  document.getElementById('container')
);

ReactDOM.render(
  <Tecnologias />,
  document.getElementById('container_2')
);

ReactDOM.render(
  <Experiencias />,
  document.getElementById('container_3')
);