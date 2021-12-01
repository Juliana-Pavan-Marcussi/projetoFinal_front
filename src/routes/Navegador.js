import React from 'react';
import './Navegador.css';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Rotas from './Rotas';

function Navegador() {
    return (
        <div className="header-content-nav">
        <ul className="header">           
            <li className="menu"><NavLink to="/professor">Professor</NavLink></li>
            <li className="menu"><NavLink to="/estudante">Estudante</NavLink></li>
            {/* <li className="menu"><NavLink to="/cadastro">Cadastro</NavLink></li> */}
            <li className="menu"><NavLink to="/login">Login</NavLink></li>
            <li className="menu"><NavLink to="/">Home</NavLink></li>
        </ul>
    </div>
    )
}

export default Navegador
