import React from 'react';
import './style.css';

import phone from '../../image/phoneIconWhite.svg';
import email from '../../image/emailIconWhite.svg';
import insta from '../../image/instaIconWhite.svg';
import face from '../../image/faceIconWhite.svg';


function Footer(){
    return(
        
            <footer className='containerFooter'>
                <div className='bloco1'>
                        <h1>
                        Quem somos
                        </h1>

                        <h1>
                        Projetos
                        </h1>

                        <h1>
                        Atividades
                        </h1>

                        <h1>
                        Galeria
                        </h1>
                </div>

                <div className='bloco2'>
                    <h1>
                    Direitos de Defesa da Criança e do Adolescente
                    </h1>

                    <p>
                    Direitos Humanos
                    </p>

                    <p>
                    E.C.A
                    </p>

                    <p>
                    Pesquisas
                    </p>

                    <p>
                    Sensibilização Pública
                    </p>

                    <p>
                    Controle Social
                    </p>
                </div>

                <div className='bloco3'>
                    <h1>
                    Contato
                    </h1>

                    <div className='cont'>
                                <img src={phone} />
                                <p>(XX) XXXX-XXXX</p>
                            </div>
                            
                            
                            <div className='cont'>
                                <img src={email} />
                                <p>osasco-cedeca@bol.com.br</p>
                            </div>

                            
                            <div className='cont'>
                                <img src={insta} />
                                <a href='https://www.instagram.com/cedeca_munhoz/' target='_blank'>@cedeca_munhoz</a>
                            </div>

                            <div className='cont'>
                                <img src={face} />
                                <a href='https://www.facebook.com/CedecaOsascoSP/' target='_blank'>@CedecaOsascoSP</a>
                            </div>
                </div>

            </footer>
           
            
        
    );
}

export default Footer;