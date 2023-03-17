import './Item.scss';

const Item = ({product}) => {
  return (
    <div className='item'>
        <div className='item__image'>
          <img className='imglist' alt={product.nameproduct} src={`/img/${product.img}`} width= "260px"/>
        </div>
        <div className='item__description'>
        <h1>{product.nameproduct}</h1>
        <p>{product.description}</p>
        <h2>$ {product.price}</h2>
        </div>
    </div>
  )
}

export default Item;