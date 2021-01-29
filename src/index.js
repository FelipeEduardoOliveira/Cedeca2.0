import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Header from  './Components/header';
import Footer from './Components/footer';
import QuemSomos from './Components/quemSomos';
import ComoAjudar from './Components/comoAjudar';
import AtividadesPage from './Components/atividadesPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/quemsomos' component={QuemSomos} />
        <Route exact path ='/comoajudar' component={ComoAjudar}/>
        <Route exact path ='/atividades' component={AtividadesPage}/>
      </Switch>
        <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


