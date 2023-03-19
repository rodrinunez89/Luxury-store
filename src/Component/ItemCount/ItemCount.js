import Button from 'react-bootstrap/Button';
import "./ItemCount.scss";


const ItemCount = ({count , setCount }) => {
    
    const onAdd = () => {
    setCount (count + 1);
     };
    const restar = () => {
        if(count === 1) {
            return;
        }
        setCount(count - 1);
    };
  return (
    <div className="counter">
        <div className="constrollers">
            <Button variant="outline-secondary" onClick={restar}>-</Button>
            <div>
                 <span>{count}</span>
            </div>
            <Button variant="outline-secondary" onClick={onAdd}>+</Button>
        </div>
    </div>
  )
};

export default ItemCount;