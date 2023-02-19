import "./style.css";

const ItemDetail = ({detail}) => {
  return (
    <div className="detailproduct">
        <div className="detailtext">
         <img alt={detail.nameproduct} src={detail.img} width= "200px"/>
        <h1>{detail.nameproduct}</h1>
        <p>{detail.description}</p>
        <h2>{detail.price}</h2>
        </div>
    </div>
  )
}

export default ItemDetail;
