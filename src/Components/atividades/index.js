import React, { Component } from 'react';
import './style.css';


class Atividades extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='containerAtividades'>
                <div>
                    <h1>Atividades da Semana</h1>
                </div>
                <div>
                    <p>O CEDECA oferece atividades para crianças e adolescentes, promovendo o lazer, cultura, dignidade, profissionalização, liberdade e a convivência social.
                    </p>
                </div>
                <div className='atividadesSemana'>


                    <div className='diaSemana'>
                        <h1>SEGUNDA-FEIRA</h1>

                        <p>Futebol e Cidadania <br/>
                                 (manhã e tarde)
                            </p>

                        <p>Dança livre e Ballet <br/>
                                 (manhã e tarde)
                            </p>
                    </div>

                    <div className='diaSemana'>
                        <h1>TERÇA-FEIRA</h1>

                            <p>     Capoeira <br/>
                                 (manhã e tarde)
                            </p>
                    </div>

                    <div className='diaSemana'>
                        <h1>QUARTA-FEIRA</h1>

                            <p>     Capoeira <br/>
                                 (manhã e tarde)
                            </p>
                    </div>

                    <div className='diaSemana'>
                        <h1>QUINTA-FEIRA</h1>

                            <p>     Capoeira <br/>
                                 (manhã e tarde)
                            </p>
                    </div>

                    <div className='diaSemana'>
                        <h1>SEXTA-FEIRA</h1>

                        <p>Reforço <br/>
                                 (manhã e tarde)
                            </p>

                        <p>Diálogos do cotidiano <br/>
                                 (manhã e tarde)
                            </p>
                    </div>

                </div>
            </div>

        );
    }
}

export default Atividades;

