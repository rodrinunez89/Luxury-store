import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../Data/products";
import ItemDetail from "../../../ItemDetail/ItemDetails";
import ItemCount from "../../../ItemCount/ItemCount";


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [detailObject, setDetailObject] = useState({});
  const getProducts = new Promise((res, rej) => (
    setTimeout(() => {

      const findProduct = products.find((item) => {
        return item.id === parseInt(id)
      });

      res(findProduct);
    }, 1000)
  ))
  useEffect(() => {
    getProducts
      .then(response => {
        setDetailObject(response);
      })
      .catch((error) => { console.log(error) })
  }, [])

  return (
    <div><ItemDetail detail={detailObject} />

    </div>
  )
}

export default ItemDetailContainer