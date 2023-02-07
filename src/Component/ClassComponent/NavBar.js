import CartWidget from '../CartWidget/CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

export default function NavBar(){
        return (
        
            <nav className="list">
                <ul>
                    <li><a href="#">SALES!</a></li>
                    <li><a href="#">NIÑOS</a></li>
                    <li><a href="#">HOMBRE</a></li>
                    <li><a href="#">MUJER</a></li>
                </ul>
            <CartWidget/>
            </nav>
        
        );
    }


