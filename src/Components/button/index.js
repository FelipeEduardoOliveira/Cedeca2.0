import React,{Component} from 'react';
import './style.css';

class Button extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
        return(
            <button onClick={()=>window.location='/comoajudar'}>
               {this.props.nameButton}
            </button>
        );
    }
}

export default Button; 

