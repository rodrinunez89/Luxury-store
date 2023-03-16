
import ItemCount from "../ItemCount/ItemCount";
import { useState , useContext , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./ItemDetail.scss";
import { CartContext } from "../context/CartContext";




const ItemDetail = ({ detail }) => {
  const navigate = useNavigate();
  const {addItem} = useContext(CartContext);
  const [count, setCount] = useState(1);
 
useEffect(()=>{
  setCount(detail?.stock === 0 ? 0 : 1)
  // eslint-disable-next-line
},[])


  return (
    <div className="detailproduct">
      <div className="detailtext">
        <div className="col">
        <img className="imglist" alt={detail.nameproduct} src={`/img/${detail.img}`} width="200px" />
        </div>
        <div className="col col--text">
        <h1>{detail.nameproduct}</h1>
        <p>{detail.description}</p>
        <p>Stock: {detail.stock} u</p>
        <h2>$ {detail.price}</h2>
        <ItemCount count={count} setCount={setCount} />
        <Button disabled={count > detail.stock ? true:false} variant="outline-secondary" onClick={() => addItem (detail , count)}>Agregar al Carrito</Button>
        <Button variant="outline-secondary" onClick={() => navigate('/')}>Seguir Comprando</Button>
        <Button variant="outline-secondary" onClick={() => navigate('/cart')}>Terminar Compra</Button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;

