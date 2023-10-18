import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            {/* Componente de Inicio */}
          </Route>
          <Route path="/categoria1" exact>
            <ItemListContainer category="Categoría 1" />
          </Route>
          <Route path="/categoria2" exact>
            <ItemListContainer category="Categoría 2" />
          </Route>
          <Route path="/carrito" exact>
            {/* Componente del Carrito */}
          </Route>
          <Route path="/producto/:id" exact>
            {/* Ruta para ver detalles de un producto */}
            <ItemDetailContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
