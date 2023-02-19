import './ItemList.scss';
import Item from "../Item/Item";
import { Link } from 'react-router-dom';


const ItemList = ({ productList }) => {
   
    return (
    <div className='ItemList'>
    {
        productList.map((product) => (
            <div className='ItemList__product' key={product.id}>
                <Link to={`/item/${product.id}`}>
                <Item product={product}/>
                </Link>
              
            </div>
        ))
    }
    </div>)
};

export default ItemList;