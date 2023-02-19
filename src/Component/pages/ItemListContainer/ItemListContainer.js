import { products } from "../../Data/products";
import { useEffect, useState } from "react";
import ItemList from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.scss";

const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();
  console.log(categoryId);

  const getProducts = new Promise((res, rej) => {
    if (categoryId) {
      const filteredProducts = products.filter((item) => item.category === categoryId);

      setTimeout(() => {
        res(filteredProducts);
      }, 1000);
    } else {
      setTimeout(() => {
        res(products);
      }, 1000);
    }

  });

  useEffect(() => {
    getProducts
      .then((response) => {
        console.log(response);
        setProductList(response);
      })
      .catch((error) => { console.log(error) })
  }, [categoryId])

  return (

    <div className="ItemListContainer">
      <ItemList productList={productList} />
    </div>

  )
};


export default ItemListContainer;


