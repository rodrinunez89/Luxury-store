import { useState, useContext , useEffect} from "react"
import { CartContext } from "../../context/CartContext";
import ItemCount from "../../ItemCount/ItemCount"

const ItemCart = ({product}) => {
    const {updateItem} = useContext(CartContext);
    const [quantity, setQuantity] = useState (product.quantity);

useEffect (()=> {
    updateItem(product.id, quantity); 
// eslint-disable-next-line
},[quantity]);


  return (
    <>
        <h2>{product.nameproduct}</h2>
            <p>{product.description}</p>
            <p>Precio Unitario: $ {product.price}</p>
            <ItemCount count={quantity} setCount={setQuantity} />
            <p>Subtotal: $ {product.price * product.quantity}</p>
            <img className="listproductbuy-img" src={`/img/${product.img}`}  alt={product.nameproduct}></img>
            
    </>
  )
}

export default ItemCart