import { useContext } from "react"; 
import { CartContext } from "../../context/CartContext";
import './listproductbuy.scss';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

 const Cart = () => {
 const {cart, clear , removeItem} = useContext (CartContext);
 const navigate = useNavigate();
  return ( 
    <div>
            {cart.length  >0 && 
              <div> <h1>- Carrito -</h1>
              <div className="listproduct-description">
                
              <img className="logocarrito" alt="logoenvio" src="/img/entrega.png"/>
              <h2>ENVÍOS A TODO EL PAIS</h2>
              <p>Recibí tu pedido de 3 a 5 días hábiles</p>
              

              <img className="logocarrito" alt="logocambio" src="/img/regreso.png"/>
              <h2>CAMBIOS</h2>
              <p>Hasta 30 dias</p>
              
              <img className="logocarrito" alt="logotarjeta" src="/img/tarjeta.png"/>
              <h2>CUOTAS SIN INTERÉS</h2>
              <p>Ahora 3 Y 6</p>
           
              </div>
              </div>};
     
    
        {cart.map((product) => (
      <div className="listproductbuy" key={product.nameproduct}>
            <h2>{product.nameproduct}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
            <img className="listproductbuy-img" src={product.img} alt={product.nameproduct}></img>
            <Button className="botones" variant="danger" onClick={()=> removeItem(product.id)}>X</Button>
      </div>
      
    ))}

      {cart.length  >0 && <Button className="botones" variant="danger" onClick={clear}>Vaciar Carrito</Button>}
      {cart.length  === 0 && <h1 className="titulo"> NO HAY PRODUCTOS EN EL CARRITO</h1>}
      {cart.length  === 0 && <Button className="botones" variant="primary" onClick={() => navigate('/')}>Volver a comprar</Button>}
    </div>
  );
};

export default Cart;