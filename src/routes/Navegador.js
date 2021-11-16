import React from 'react';
import '../App.css';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

function Navegador() {
    return (
        <div>
        <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/cadastro">Cadastro</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </ul>
    </div>
    )
}

export default Navegador
