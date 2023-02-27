import { CartContext } from "./CartContext";
import { useState } from "react";

const CartProvider = ({ children}) => {
    const [cart, setCart] = useState([]);
   

    const addItem = (item, quantity) => {
        console.log(isInCart(item.id));

if(isInCart(item.id)){
    const newCart = cart.map((product) => {
        if(product.id === item.id){
            product.quantity = product.quantity + quantity;
            return product
        } else {
            return product
        }
    })
    setCart(newCart)
}else{
   const product = {
            id: item.id,
            nameproduct: item.nameproduct,
            price: item.price,
            quantity: quantity,
            description: item.description,
            img: item.img,
            stock: item.stock,
            category: item.category,
        };
        setCart([...cart,product])
    }};

  const clear = () => {
    setCart([]);
  };

const removeItem = (productId) => {
    setCart(cart.filter((product) => product.id !== product.Id))
};

const isInCart = (productId) => {
    if(cart.find((product) => product.id === productId)){
        return true;
    }else {
        return false;
    }
}


    return( 
    <CartContext.Provider value={{cart, addItem , clear ,removeItem , }}>{children}</CartContext.Provider>);
};

export default CartProvider;