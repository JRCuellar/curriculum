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
     var tecno = this.props.tecno.map(function (data) {
      
      return (
        <li className="tecnologia">
              &#x2771; {data.name} <br/>
              <a href="{data.url}" title="{data.name}">{data.url}</a>
        </li>
      );
    });

    return(
      <ul>{tecno}</ul>
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
