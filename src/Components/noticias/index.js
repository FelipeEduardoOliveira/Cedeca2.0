import React, { Component } from 'react';
import './style.css';
import CardNews from '../cardNews/index';
import criancasDancando from '../../image/criancasDancando.svg';



class News extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <section>
                <h1> O que está acontecendo agora... </h1>
                <div className='cardsNews'>
                    <CardNews
                    className='item'
                        img={criancasDancando}
                        textAlt='Grupo de pessoas se alongando'
                        Titulo='Assinatura do Financiamento Público'
                        Desc='O CEDECA atua na defesa jurídica-social e articula setores sociais.'
                    />

                    <CardNews
                    className='item'
                        img={criancasDancando}
                        textAlt='Grupo de pessoas se alongando'
                        Titulo='Visita, orientação, e distribuição de alimentos no período de Pandemia
                        '
                    />

                    <CardNews
                    className='item'
                        img={criancasDancando}
                        textAlt='Grupo de pessoas se alongando'
                        Titulo='Campanha de Natal'
                        Desc='O CEDECA atua na defesa jurídica-social e articula setores sociais para que os direitos humanos.
                        '
                    />

                    <CardNews
                    className='item'
                        img={criancasDancando}
                        textAlt='Grupo de pessoas se alongando'
                        Titulo='07 de Novembro - Aniversario do Cedeca'
                        Desc='O CEDECA atua na defesa jurídica-social e articula setores sociais.
                        '
                    />
                    <CardNews
                    className='item'
                        img={criancasDancando}
                        textAlt='Grupo de pessoas se alongando'
                        Titulo='Prêmio da Abrinc'
                        Desc='O CEDECA atua na defesa jurídica-social e articula setores sociais para que os direitos humanos.
                        '
                    />

                    
                </div>
            </section>

        );
    }
}

export default News;

