import React from 'react';
import Header from  './Components/header';
import Back from './Components/backgound/';
import Article1 from './Components/artigoPrincipal';
import News from './Components/noticias';
import Atividades from './Components/atividades';
import Formulario from './Components/contatos';
import Footer from './Components/footer';

function App() {
  return (
    <div>
      <Header />

      <Back />

      <Article1 />

      <News />

      <Atividades />

      <Formulario />

      <Footer />
    </div>
  );
}

export default App;
