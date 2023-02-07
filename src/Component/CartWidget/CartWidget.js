import { Component } from 'react';
import logocarrito from '../CartWidget/carrito.png';

class CartWidget extends Component {
    render() {
        return (
        <div className='carro'>
           <h1 className='textocarro'>01</h1>
           <img clasName='logocar' src={logocarrito}/>
           
        </div>
        );
    }
}

export default CartWidget



