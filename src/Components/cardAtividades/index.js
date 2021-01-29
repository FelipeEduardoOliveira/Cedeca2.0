import React, { Component } from 'react';
import './style.css';

import Fut1 from '../../image/futebol1.png'
import Fut2 from '../../image/futebol2.png'

class CardAtividades extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='ContainerAtividadesCard'>

                <h2>Atividade Selecionada</h2>

                <h3>Dias</h3>
                <p>Descrição explicando o dia</p>

                <h3>Participantes</h3>
                <p>Descrição explicando sobre quem participa</p>

                <h3>Sobre a atividade</h3>
                <p>Descrição explicando sobre a atividade</p>

                <div className='containerImg'>
                    <img src={Fut1}/>
                    <img src={Fut2}/>
                </div>

                <div className='ContainerButton'>
                    <button>
                        Entre em contato
                    </button>
                </div>
                <hr/>
            </div>

        );
    }
}

export default CardAtividades;

