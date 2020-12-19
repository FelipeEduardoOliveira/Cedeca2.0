import React, { Component } from 'react';
import './style.css';
import phone from '../../image/phoneIcon.svg';
import email from '../../image/emailIcon.svg';
import insta from '../../image/instaIcon.svg';
import face from '../../image/faceIcon.svg';
class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='containerFormulario'>
                    <div className='contatos'>
                            <h1>
                                Contatos
                            </h1>
                            <div className='container'>
                                <img src={phone} />
                                <p>(XX) XXXX-XXXX</p>
                            </div>
                            
                            
                            <div className='container'>
                                <img src={email} />
                                <p>osasco-cedeca@bol.com.br</p>
                            </div>

                            
                            <div className='container'>
                                <img src={insta} />
                                <a href='https://www.instagram.com/cedeca_munhoz/' target='_blank'>@cedeca_munhoz</a>
                            </div>

                            <div className='container'>
                                <img src={face} />
                                <a href='https://www.facebook.com/CedecaOsascoSP/' target='_blank'>@CedecaOsascoSP</a>
                            </div>
                    </div>

                    <div className='formulario'>
                            <h1>
                                Fale conosco
                            </h1>

                            <div className='container'>
                            <label>Nome:</label>
                            <input />
                            </div>

                            <div className='container'>
                            <label>Email:</label>
                            <input />
                            </div>

                            <div className='container'>
                            <label>Mensagem:</label>
                               <input className='msg' />
                            </div>
                    </div>
            </div>

        );
    }
}

export default Formulario;

