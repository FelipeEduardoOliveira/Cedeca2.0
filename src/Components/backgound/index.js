import React from 'react';
import './style.css';
import Button from '../button';

function Back(porps){
    return(
        <div  className='fundo'>
           <h1>
               {porps.h1}
           </h1>

           <p>
           {porps.p}

           </p>

            {
               porps.button ?
               <Button nameButton='Quero Ajudar'/>
               :
               ''
            }
        </div>
    );
}

export default Back;