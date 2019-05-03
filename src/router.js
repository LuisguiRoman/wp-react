import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './components/about';

const Rutas = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/el-diablo" component={About}/>
        </Switch>
    </BrowserRouter>
);


export default Rutas;