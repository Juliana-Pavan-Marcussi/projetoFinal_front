import React from 'react';
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';

function Rotas() {
    return (
        <div>
             <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/login" component={Login} />
            </Routes>
        </div>
    )
}

export default Rotas
