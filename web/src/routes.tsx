/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import Listar from './pages/Listar'
import Likear from './pages/Likear'
import Dashboard from './pages/Dashboard'
import Recomendations from './pages/Recomendations'


function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/recomendations" component={Recomendations} />
        <Route path="/likear" component={Likear} />
        <Route path="/movielist" component={Listar} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;