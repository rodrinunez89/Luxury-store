import { useContext } from "react"; 
import { CartContext } from "../../context/CartContext";
import './listproductbuy.scss';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore , doc, updateDoc } from "firebase/firestore";

 const Cart = () => {
 const {cart, clear , removeItem , total} = useContext (CartContext);
 const navigate = useNavigate();
 const db = getFirestore();

 const createOrder = (event) => {
  event.preventDefault();
  
  const querySnapshot = collection (db, 'orders');
  
  

  addDoc (querySnapshot, {
    
   buyer : {
    email: 'hola@email.com',
    name: 'John', 
    phone: '+5411112312',
  },



  products : cart.map((product) => {
    return {
      nameproduct : product.nameproduct,
      price : product.price,
      id: product.id,
      quantity: product.quantity,
  
    }
  } ),
  total: total,
  })
  .then((response) => {
    console.log(response.id);
    alert(`Muchas gracias por tu compra, bajo el numero de orden, ID: ${response.id}`);
    updateStocks();
  })

  .catch((error) => console.log(error));
 };
const updateStocks = () => {
  cart.forEach((product)=> {
    const querySnapshot = doc(db, 'products', product.id);

    updateDoc(querySnapshot, {
      stock: product.stock - product.quantity,
  })
  .then(()=>{
    alert ('El stock a sido actualizado');
  } )
  .catch((error)=> console.log (error))
  })
};



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
              </div>}
     
    
        {cart.map((product) => (
      <div className="listproductbuy" key={product.nameproduct}>
            <h2>{product.nameproduct}</h2>
            <p>{product.description}</p>
            <p>Precio Unitario: {product.price}</p>
            <p>Cantidad: {product.quantity}</p>
            
            <img className="listproductbuy-img" src={`/img/${product.img}`}  alt={product.nameproduct}></img>
            <Button className="botones" variant="danger" onClick={()=> removeItem(product.id)}>X</Button>
      
      </div>
      
      )
     
    )}
      <div></div>
      {/* {cart.reduce ((acc, curr) => acc + curr.price * curr.quantity, 0)} */}
      {cart.length  >0 && <div>
        <h1> TOTAL: $ {total}</h1>
        <Button className="botones" variant="danger" onClick={clear}>Vaciar Carrito</Button>
        <Button className="botones" variant="primary" onClick={createOrder}>Completar Compra</Button>
        <Button className="botones" variant="primary" onClick={() => navigate('/')}>Seguir Comprando</Button>
        
        </div>}
      {cart.length  === 0 && <div> 
        <h1 className="titulo"> NO HAY PRODUCTOS EN EL CARRITO</h1>
        <Button className="botones" variant="primary" onClick={() => navigate('/')}>Volver a comprar</Button>
                            </div>}
      
      
     
    
    </div>
  );
};

export default Cart;