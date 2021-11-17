import React from 'react';
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import { Switch } from "react-router";

function Rotas() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    )
}

export default Rotas
