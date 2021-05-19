import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

import EscolherParoquia from './pages/EscolherParoquia';
import EscolherMissa from './pages/EscolherMissa';
import Dados from './pages/Dados';
import Sucesso from './pages/Sucesso';
import Error from './pages/Error/index';

const Routes = () =>{
    return (
        <BrowserRouter>
        <Route component={EscolherParoquia} path="/" exact />
        <Route component={EscolherMissa} path="/escolhermissa"/>
        <Route component={Dados} path="/escolher-dados"/>
        <Route component={Sucesso} path="/sucesso"/>
        <Route component={Error} path="/error"/>
        </BrowserRouter>
    )
}

export default Routes;