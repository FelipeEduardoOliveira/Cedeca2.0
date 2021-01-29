import React, { Component } from 'react';
import './style.css';

import Back from '../backgound/';

import Valores from '../valores';

import Equipe from '../equipe';

class QuemSomos extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (

            <div>
                <Back h1='Quem Somos' p='' button={false} />

                <div className='nossaHistoria'>
                    <h1>Nossa história</h1>


                    <p>
                        O CEDECA-OSASCO (Centro de Defesa dos Direitos da Criança e do Adolescente) é uma organização da Sociedade Civil, sem fins lucrativos que atua na defesa da garantia de direitos e deveres das crianças e adolescentes e seus familiares em situação de vulnerabilidades sociais. Fundada em 07 de Novembro de 2015 por um grupo de agentes de proteção juvenil, engajados nas pautas da Rede de Proteção Básica da Criança e Adolescente deste município.
                       </p>

                    <p>
                        Esta comunidade é carente de todo tipo de recurso básico e popularmente conhecido como “Favela da Treze” ou “Área D-2”, localizada no bairro Munhoz Junior. É um bairro proporcionalmente grande, subdesenvolvido com muitas áreas ocupadas de modo irregulares onde diariamente vemos crianças e adolescentes abandonadas, fora da escola, onde partes destes se envolvem com uso abusivo de álcool e outras drogas se tornando dependentes químicos e acabam praticando furtos e outros delitos que resultam em internações e restrições de liberdade.
                        </p>

                    <p>
                        É neste campo a que viemos atuar, onde 19 jovens foram brutalmente assassinados e a região ficou nacionalmente conhecida como um dos locais mais perigosos para se viver, onde ocorreu a maior chacina da história do nosso Município e de toda Região Oeste do Estado de São Paulo, destruindo sonhos e principalmente a vida de centenas de famílias atingidas direta ou indiretamente.
                        </p>

                    <p>
                        Portanto é neste cenário conflituoso e hostil que iniciamos um trabalho de identificação, acolhimento, estruturação das potencialidades e encaminhamentos para os órgãos públicos de referencia.
                        </p>


                </div>

                <div className='missao'>
                    <h1> Missão </h1>

                        <p>
                        O CEDECA tem a missão de atuar na defesa jurídica-social e articular setores sociais para que os direitos humanos da criança e adolescente sejam respeitados e efetivados pelas famílias, sociedade e Estado. Propõe atender às crianças e adolescentes e seus familiares visando o resgate da valorização do indivíduo, trabalho em equipe na construção de uma sociedade melhor.
                        </p>

                        <p>
                        Sabedores das dificuldades enfrentadas no cumprimento dos direitos, o eixo norteador de toda atuação da entidade se baseia nos princípios do Estatuto da Criança e do Adolescente (ECA).
                        </p>

                </div>

                <div className='visao'>
                            <h1>Visão</h1>
                            <p>
                            Promover ações que contribuam e facilitem o acesso das crianças e adolescentes à saúde à alimentação, ao lazer, á cultura, à dignidade, à profissionalização, ao respeito, à liberdade, à convivência familiar e comunitária e a defesa dos direitos humanos.
                            </p>
                </div>

                <Valores/>


                <div className='quemAjudamos'>
                            <h1>Quem o CEDECA ajuda?</h1>
                            <p>
                            Crianças e adolescentes 07 a 17 anos e seus familiares, residentes em bairros periféricos, em situação de desigualdade social.
                            </p>
                </div>

                <div className='nossosObjetivos'>
                            <h1>Nossos objetivos</h1>
                            <p>
                            É propiciar o atendimento a crianças e adolescentes inseridos na instituição, proveniente de família em situação de vulnerabilidade social, prevenindo a ocorrência de situações de risco pessoal e social, promovendo o desenvolvimento humano e consequentemente um aumento da qualidade de vida, visando assim, o incentivo a socialização e a convivência comunitária, motivação, autonomia, fortalecendo o respeito, a solidariedade, os vínculos familiares e proteção social visando à valorização da vida e fortalecimento do individuo na elaboração de perspectiva de qualidade de vida.

                            </p>
                </div>

                    <Equipe />

                    
            </div>

        );
    }
}

export default QuemSomos;

