import { useContext } from "react"; 
import { CartContext } from "../../context/CartContext";
import './listproductbuy.scss';

 const Cart = () => {
  const {cart, clear , removeItem} = useContext (CartContext);
  return ( 
  <div>
    {cart.map((product) => (
      <div className="listproductbuy" key={product.nameproduct}>
        <h2>{product.nameproduct}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.quantity}</p>
        <img className="listproductbuy-img" src={product.img} alt={product.nameproduct}></img>
        <button onClick={()=> removeItem(product.id)}>X</button>
      </div>
    ))}

      {cart.length  >0 && <button onClick={clear}>Vaciar Carrito</button>}

  </div>
  );
};

export default Cart;