import React, { Component } from 'react';
import './style.css';


class CardNews extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='containerCard'>
                <img src={this.props.img} alt={this.props.textAlt}/>
                <div>
                    <h3>{this.props.Titulo}</h3>
                    <p>{this.props.Desc}</p>
                    <a>Continuar lendo</a>
                </div>
            </div>

        );
    }
}

export default CardNews;

