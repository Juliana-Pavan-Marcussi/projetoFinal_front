import React from 'react';
import './App.css';
import './routes/Navegador';
import './routes/Rotas';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Navegador from './routes/Navegador';
import Rotas from './routes/Rotas';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css.map';
import 'bootstrap/dist/css/bootstrap-grid.min.css.map';
import 'bootstrap/dist/css/bootstrap-grid.min.css';


function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="header-content">
          <h1 className="first-title">Ti.cher</h1>
          {/* <img src={Vector} /> */}
          <h3 className="subtitle-green">TIRE SUAS DÚVIDAS DE FORMA RÁPIDA E OBJETIVA!</h3>
          <p className="subtitle-white">Cadastre-se para ter acesso ao melhor atendimento indivual e personalizado com profissionais de qualidade e sob demanda</p>
          <p></p>
        </div>
        <div>
          <Navegador />
        </div>
        <div className="content">
          <Rotas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
