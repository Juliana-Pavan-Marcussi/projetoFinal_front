import './App.css';
import './routes/Navegador';
import './routes/Rotas';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Navegador from './routes/Navegador';
import Rotas from './routes/Rotas';

function App() {
  return (
    <BrowserRouter>
    <div>
      <h1>Ti.Tcher</h1>
      <Navegador />
      <div className="content">
        <Rotas />
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
