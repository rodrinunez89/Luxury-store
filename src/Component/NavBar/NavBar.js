import { NavLink} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.scss";


const NavBar = () => {
    
        return (
        
            
       <div className="navbar">
            <div>
            <img alt="logo" src="/img/imagen.png" width={"140px"}/>
            </div>
            <div className="list">
                        <ul>
                            <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to="/">Todos</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to="/category/summer">Summer</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to="/category/winter">Winter</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to="/category/spring">Spring</NavLink></li>
                        </ul>

            </div>
            <CartWidget />
        </div>
        
        );
    };


export default NavBar;