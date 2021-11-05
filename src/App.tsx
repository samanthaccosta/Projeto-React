import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagens/ListaPostagem';
let nome = "Samantha Costa"
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{minHeight:'100vh'}} >
        <Route exact path= '/'>
            <Login/>
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>
          <Route path= '/login'>
            <Login/>
          </Route>
          <Route path='/temas'>
            <ListaTema />
          </Route>
          <Route path='/posts'>
            <ListaPostagem />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>

  );
}
export default App;
