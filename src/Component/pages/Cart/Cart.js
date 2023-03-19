import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './listproductbuy.scss';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

import ItemCart from "./ItemCart";
import { InfoCard } from "./InfoCard/InfoCard";
import { Form } from "./Form/Form";



const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className="Cart">
      {cart.length > 0 && <InfoCard />}
     
      {cart.map((product) => (
        <div className="listproductbuy" key={product.id}>
          <ItemCart product={product} />
          <Button className="botones" variant="danger" onClick={() => removeItem(product.id)}>X</Button>
        </div>
      ))}

      {cart.length > 0 && <Form />}
      {cart.length === 0 &&
        <div>
          <h1 className="titulo"> NO HAY PRODUCTOS EN EL CARRITO</h1>
          <Button className="botones" variant="primary" onClick={() => navigate('/')}>Volver a comprar</Button>
        </div>
      }
    </div>
  );
};

export default Cart;



