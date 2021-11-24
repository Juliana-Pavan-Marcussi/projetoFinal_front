import React from 'react';
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import { Switch } from "react-router";
import Estudante from '../views/Estudante';
import Professor from '../views/Professor';
import Senha from '../pages/Senha';

function Rotas() {
    return (
        <div>
            <Switch>
                <Route path="/professor" component={Professor} />
                <Route path="/estudante" component={Estudante} />
                <Route exact path="/" component={Home} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/login" component={Login} />
                <Route path="/redefinir-senha" component={Senha} />
            </Switch>
        </div>
    )
}

export default Rotas
