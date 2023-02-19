
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./ItemDetail.scss";

const ItemDetail = ({ detail }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const agregarAlCarrito = (event) => {
    event.preventDefault();
    console.log(detail)
    console.log({ ...detail, quantiy: count })
  };
  return (
    <div className="detailproduct">
      <div className="detailtext">
        <div className="col">
        <img className="imglist" alt={detail.nameproduct} src={detail.img} width="200px" />
        </div>
        <div className="col col--text">
        <h1>{detail.nameproduct}</h1>
        <p>{detail.description}</p>
        <h2>{detail.price}</h2>
        <ItemCount count={count} setCount={setCount} />
        <Button variant="outline-secondary" onClick={agregarAlCarrito}>Agregar al Carrito</Button>
        <Button variant="outline-secondary" onClick={() => navigate('/')}>Seguir Comprando</Button>
        <Button variant="outline-secondary" onClick={() => navigate('/cart')}>Terminar Compra</Button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;
