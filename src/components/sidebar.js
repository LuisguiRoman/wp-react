import React, { Component } from 'react';//importar componente siempre
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Sidebar extends Component{

	render(){//renderizar el html de la clase
		return(
			<BrowserRouter>
				<div className="sidebar">
				   <div className="relative">
			            <figure>
			        	    <a>
			        	       <img src="../assets/img/El-Diablo.png" alt="El Diablo" />
			        	    </a>
			            </figure>

			            <h2 id="myname">
			                <a></a>
			            </h2>

			            <div className="navigation">
			                <a href="#!">PORTAFOLIO</a>
			                <Link to="/el-diablo">EL DIABLO</Link>
			        	    <a href="#!">CONTACTO</a>
			            </div>

			            <ul>
			                <li>
			                    <a href="https://facebook.com/somoseldiablo/" target="_blank" className="fab fa-facebook"></a>
			                </li>
			            </ul>

				   </div>
				</div>

				<Switch>
		            <Route path="/el-diablo" component={About}/>
		        </Switch>

			</BrowserRouter>
		)
	}

}

export default Sidebar;//exportar la clase