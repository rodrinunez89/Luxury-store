import "./style.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({detail}) => {
  const navigate= useNavigate();
  const [count, setCount] = useState(0);

  const agregarAlCarrito = (event) => {
    event.preventDefault();
    console.log(detail)
    console.log({...detail, quantiy: count})
  };
  return (
    <div className="detailproduct">
        <div className="detailtext">
         <img alt={detail.nameproduct} src={detail.img} width= "200px"/>
        <h1>{detail.nameproduct}</h1>
        <p>{detail.description}</p>
        <h2>{detail.price}</h2>
        <ItemCount count={count} setCount={setCount}/>;
        <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
        <button onClick={()=> navigate('/')}>Seguir Comprando</button>
        <button onClick={()=> navigate('/cart')}>Terminar Compra</button>
       
        </div>
    </div>
  )
}

export default ItemDetail;
