import React, { Component } from 'react';
import './style.css';
import CardAtividades from '../cardAtividades';

class AtividadesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='containerAtividadesPage'>

                    <p>
                    O CEDECA oferece atividades para crianças e adolescentes, promovendo o lazer, cultura, dignidade, profissionalização, liberdade e a convivência social.

                    </p>
                <CardAtividades/>
            </div>

        );
    }
}

export default AtividadesPage;

