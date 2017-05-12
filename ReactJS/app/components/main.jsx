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
  			direccion: 		"Avenida vía lactea nº 11 3-E",
  			poblacion: 		"Móstoles",
  			provincia: 		"Madrid",
  			cp: 			"28938",
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
					<li><b>Dirección:</b><br/>&nbsp;&nbsp;{this.state.direccion}</li>
					<li><b>Población:</b><br/>&nbsp;&nbsp;{this.state.poblacion}</li>
					<li><b>Provincia:</b><br/>&nbsp;&nbsp;{this.state.provincia}</li>
					<li><b>Código Postal:</b><br/>&nbsp;&nbsp;{this.state.cp}</li>
					<li><b>Teléfono:</b><br/>&nbsp;&nbsp;{this.state.telefono}</li>
				</ul>
			</div>
		</div>
	)
  }
}

ReactDOM.render(
  <DatosPersonales />,
  document.getElementById('container')
);