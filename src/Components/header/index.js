import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import Button from '../button';
import logoCedeca from '../../image/logoCedeca.svg';
function Header(){
    
    return(
        <div className='headerContainer'>
            
            <header>
                <img src={logoCedeca} alt='Logotipo da institução'/>
                <ul>
                    <li> <Link to='/'> Inicio </Link> </li>
                    <li> 
                        <Link to='/quemsomos'> Quem somos </Link> 
                    </li>
                    <li> Atividades 
                        {/* <ul>
                            <li>Futebol</li>
                            <li>Capoeira</li>
                            <li>Ballet</li>
                        </ul> */}
                    </li>
                    <li> Projetos </li>
                    <li> Galeria </li>
                    <li> Contato </li>
                        <Button nameButton='Como Ajudar'/>
                </ul>
            </header>
            
        </div>
    );
}

export default Header;