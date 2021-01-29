import React, { Component } from 'react';
import './style.css';


class Equipe extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (

            <div className='equipe'>
                <h1>Equipe</h1>

                <div className='listEquipe'>
                    <div className='column1'>

                        <div>
                            <p>Claudino Alves Ribeiro</p>
                            <h3>PRESIDENTE</h3>
                        </div>

                        <div>
                            <p>Gilberto dos Santos Cunha</p>
                            <h3>COORDENADOR</h3>
                        </div>

                        <div>
                            <p>Renata Braga Campos Dias</p>
                            <h3>Assistente Social</h3>
                        </div>


                        <div>
                            <p>Simone Maria Tavares da Silva</p>
                            <h3>Auxiliar de Cozinha</h3>
                        </div>

                        <div>
                            <p>Gracilene Ferreira Santos</p>
                            <h3>Auxiliar de Limpeza</h3>
                        </div>


                        <div>
                            <p>Jociele Martins da Luz</p>
                            <h3>Estagiária do Serviço Social</h3>
                        </div>

                    </div>

                    <div className='column2'>


                        <div>
                            <p>Cláudia Regina Viana Resende</p>
                            <h3>Psicopedagoga</h3>
                        </div>

                        <div>
                            <p>Glaucia Lima Conceição</p>
                            <h3>Professora de Dança</h3>
                        </div>

                        <div>
                            <p>Marcelo dos Santos Moura</p>
                            <h3>Professor de Capoeira</h3>
                        </div>


                        <div>
                            <p>Gildo Ribeiro de Sousa</p>
                            <h3>Professor de Educação Física</h3>
                        </div>

                        <div>
                            <p>Jhonatan</p>
                            <h3>Professor de Educação Física</h3>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default Equipe;

