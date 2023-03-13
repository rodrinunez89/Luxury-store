import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../Data/products";
import ItemDetail from "../../../ItemDetail/ItemDetails";
import ItemCount from "../../../ItemCount/ItemCount";
import { getFirestore , doc, getDoc  } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [detailObject, setDetailObject] = useState({});
  // const getProducts = new Promise((res, rej) => (
  //   setTimeout(() => {

  //     const findProduct = products.find((item) => {
  //       return item.id === parseInt(id)
  //     });

  //     res(findProduct);
  //   }, 1000)
  // ))


const getProduct = () => {
const db= getFirestore();
const querySnapshot = doc(db, 'products' , id);

getDoc(querySnapshot)
.then((res)=> {
  setDetailObject(
    {
      id: res.id,...res.data()
    }
  );
})
.catch((error) => console.error(error))
}


  useEffect(() => {
    // getProducts
    //   .then(response => {
    //     setDetailObject(response);
    //   })
    //   .catch((error) => { console.log(error) })
    getProduct();
  }, [])

  return (
    <div><ItemDetail detail={detailObject} />

    </div>
  )
}

export default ItemDetailContainer