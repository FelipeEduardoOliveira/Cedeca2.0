import React from 'react';
import './style.css';
import Button from '../button';

function Back(){
    return(
        <div  className='fundo'>
           <h1>
               CEDECA
           </h1>

           <p>
           Centro de Defesa da Criança e do Adolescente

           </p>

           <Button nameButton='Quero Ajudar'/>
        </div>
    );
}

export default Back;