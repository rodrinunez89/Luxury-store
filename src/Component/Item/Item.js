import './style.css';

const Item = ({product}) => {
  return (
    <div className='item'>
        <img className='imglist' alt={product.nameproduct} src={product.img} width= "260px"/>
        <h1>{product.nameproduct}</h1>
        <p>{product.description}</p>
        <h2>{product.price}</h2>
        
    </div>
  )
}

export default Item;