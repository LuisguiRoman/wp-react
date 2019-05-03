import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//mis componentes
import Sidebar from './components/sidebar';

//Rutas
import Rutas from './router';


class ElDiablo extends Component {

    render() {
	    return (
	        <div id="primary">
			    <Sidebar />
			    <main>
			       <Rutas />
			    </main>
			</div>
	    );
    }
}

export default ElDiablo;


ReactDOM.render(<ElDiablo />, document.getElementById('el-diablo'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
