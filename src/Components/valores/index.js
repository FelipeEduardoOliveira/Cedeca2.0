import React, { Component } from 'react';
import './style.css';

import Autonomia from '../../image/autonomia.svg';
import Compromisso from '../../image/compromisso.svg';
import Diversidade from '../../image/diversidade.svg';
import Conhecimento from '../../image/conhecimento.svg';
import Rede from '../../image/rede.svg';

class Valores extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (

            <div className='valores'>
                <h1>Valores</h1>

                <div className='line1'>
                    <div>
                    <img src={Diversidade}/>
                    <p>Diversidade</p>
                    </div>

                    <div>
                    <img src={Compromisso}/>
                    <p>Compromisso com a criança e o adolescente</p>
                    </div>

                    <div>
                    <img src={Autonomia}/>
                    <p>Autonomia</p>
                    </div>

                </div>

                <div className='line2'>

                    <div>
                        <img src={Rede}/>
                        <p>Trabalho em rede</p>
                    </div>

                    <div>
                    <img src={Conhecimento}/>
                        <p>Valorização do conhecimento</p>
                    </div>

                </div>
                
               
                
                
            </div>

        );
    }
}

export default Valores;

