import React, { Component } from 'react';
import './style.css';
import ballet from '../../image/criancas.svg';

import criancaComBola from '../../image/criancaComBola.svg';


class Article1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <article>
                <div className='comoFunciona'>
                    <h1> Como funciona? </h1>

                    <p>O CEDECA atua na defesa jurídica-social e articula setores sociais para que os direitos humanos da criança e adolescente sejam respeitados e efetivados pelas famílias, sociedade e Estado.</p>

                    <p>Para isso, atende às crianças e adolescentes e seus familiares visando o resgate da valorização do indivíduo, trabalhando em equipe na construção de uma sociedade melhor.</p>

                    <img src={ballet} alt='Foto das meninas do Ballet'/>
                </div>

                <div className='quemAjudamos'>

                    <img src={criancaComBola} alt='Uma criança brincando com a bola'/>

                    <h1> Quem o CEDECA ajuda? </h1>

                    <p>Crianças e adolescentes 07 a 17 anos e seus familiares, residentes em bairros periféricos, em situação de desigualdade social.</p>

                </div>

            </article>

        );
    }
}

export default Article1;

