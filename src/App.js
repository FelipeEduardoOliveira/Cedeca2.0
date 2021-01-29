import React from 'react';

import Back from './Components/backgound/';
import Article1 from './Components/artigoPrincipal';
import News from './Components/noticias';
import Atividades from './Components/atividades';
import Formulario from './Components/contatos';


function App() {
  
  return (
    <div>

      <Back h1='CEDECA' p='Centro de Defesa da Criança e do Adolescente' button={true}/>

      <Article1 />

      <News />

      <Atividades />

      <Formulario />

    </div>
  );
}

export default App;
