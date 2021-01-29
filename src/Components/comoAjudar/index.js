import React, { Component } from 'react';
import './style.css';

import Back from '../backgound/';

class ComoAjudar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (

            <div>
                <Back h1='Como ajudar' p='' button={false} />

                <div className='comoAjudar'>
                    <div className='column1'>
                        <h1>Apadrinhe uma criança</h1>

                        <p>
                            Muitas colaborações podem ser consolidadas seja por contribuições financeiras e doação de materiais para o fortalecimento de nossas ações e do projeto. <br/> <br/> <br/> <br/>

                    <strong>
                                Você também pode fazer parte dessa Rede!
                    </strong>
                        </p>


                        <h3>Doação Material</h3>

                        <p>Com doação de materiais (livros para biblioteca, material de expediente, de consumo, uniformes entre outros).</p>


                        <h3>Trabalho Voluntário</h3>

                        <p>Com doação de trabalho voluntário, intelectual ou artístico e a participação em nossos cursos, campanhas e atividades.</p>
                    </div>

                    <div className='column2'>
                        <h1>Doações</h1>
                        <p>Você pode ajudar através de doações financeiras, regulares ou não, em qualquer valor, mediante depósito em conta, doação online pelo Pagseguro ou boleto bancário</p>

                        <div>
                        <button>TESTE</button>
                        </div>
                    </div>


                    <div className='column3'>
                        <h1>Transparência</h1>

                        <p>
                            O Centro de Defesa dos Direitos da Criança e do Adolescente possui registros e certificações conforme as legislações pertinentes.
                            Promove ações com base em suas diretrizes e preza pela legalidade dos serviços prestados.
                        </p>


                        <p>
                            Documentação<br/>
                            Estatuto<br/>
                            Ata de eleição<br/>
                            Declaração de Utilidade Pública Municipal<br/>
                            Declaração de Utilidade Pública Estadual<br/>
                            CRCE – Certificado de Regularidade Cadastral de Entidade entre outros...<br/>
                        </p>

                        <p>Na Assistência Social</p>

                        <p>
                            
                        MAS- Conselho Municipal de Assistência Social<br/>
                            CMDCA – Conselho Municipal dos Direitos das Crianças e Adolescentes<br/>
                            PRÓ-SOCIAL – Sistema Pró-Social do Estado de São Paulo<br/>
                        </p>
                    </div>
                </div>
            </div>

        );
    }
}

export default ComoAjudar;

