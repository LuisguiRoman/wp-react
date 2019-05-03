import React, { Component } from 'react';//importar componente siempre

class About extends Component{

	componentDidMount() {
		let get_per = document.getElementsByClassName('skill');
		let percent_length = get_per.length;
		let i;
		for( i = 0; i < percent_length; i++ ){
		    var ancho = get_per[i].getAttribute('data-skill');
		    var span  = get_per[i].children[0];
		    	span.style.width = ancho;
		}
	}

	render(){//renderizar el html de la clase
		return(
			<div>
			   <header>
			      <div className="centro">
			         <a id="back"  >
			           <span className="fas fa-chevron-left"></span> VOLVER
			         </a>
			         <h1>Sobre mi</h1>
			      </div>
			   </header>

			   <div className="container" >
			      <div className="center">
			   
			         <div className="row">
			            <div className="col m6 s12">
			               <article>
			                  <p>
			                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			                  </p>
			               </article>
			            </div>
			            <div className="col m6 s12">
			               <div className="skills">
			                  <h4>Wordpress</h4>
			                  <div className="skill" data-skill="80%"><span></span></div>
			                  <h4>Html & Css</h4>
			                  <div className="skill" data-skill="100%"><span></span></div>
			                  <h4>Angular</h4>
			                  <div className="skill" data-skill="50%"><span></span></div>
			                  <h4>After effects & Premiere pro</h4>
			                  <div className="skill" data-skill="60%"><span></span></div>
			                  <h4>Photoshop & Illustrator</h4>
			                  <div className="skill" data-skill="40%"><span></span></div>
			               </div>
			            </div>
			         </div>
			           
			      </div>
			   </div>

			</div>
		)
	}

}

export default About;//exportar la clase