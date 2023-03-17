import { React, useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import { CartContext } from '../../../context/CartContext';


export const Form = () => {

    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: '',
        email2: '' 
    });
    
    const setValue = useEffect((name, value) => {
        return () => {
           
        };
      });

    const [disabled, setdisabled] = useState('disabled');
    const navigate = useNavigate();

    const { cart, clear, removeItem, total } = useContext(CartContext);

    const createOrder = (event) => {
        if(disabled==='disabled') return false
        event.preventDefault();
        const db = getFirestore();
        const querySnapshot = collection(db, 'orders');
        addDoc(querySnapshot, {
            buyer: {
                email: formValue.email,
                name: formValue.name,
                phone: formValue.phone,
            },
            products: cart.map((product) => {
                return {
                    nameproduct: product.nameproduct,
                    price: product.price,
                    id: product.id,
                    quantity: product.quantity,

                }
            }),
            total: total,
        }).then((response) => {
        
            alert(`Compra concretada, bajo el numero de orden, ID: ${response.id}`);
            updateStocks(db);
        }).catch((error) => console.log(error));
    };

    const updateStocks = (db) => {

        cart.forEach((product) => {
            const querySnapshot = doc(db, 'products', product.id);

            updateDoc(querySnapshot, {
                stock: product.stock - product.quantity,
            })
                .then(() => {
                    alert('Muchas Gracias por su compra !!')
                })
                .catch((error) => console.log(error))
        })
    };

    const handleChange = (event) => {

        setFormValue({
            ...formValue, [
                event.target.name
            ]: event.target.value,
        });
    }

    useEffect(() => {
        if(formValue.email === formValue.email2 && (formValue.email?.length && formValue.email2?.length)){
            setdisabled('');
        } else {
            setdisabled('disabled');
        }
    }, [formValue])
    
    

    return (
        <div>
            <div className="formcompra">
                <h1 className="textototal"> TOTAL: $ {total}</h1>
                <div className="contact">
                    <form className="contact__form">

                        <input type="text" name='name' placeholder="Su Nombre" value={formValue.name} onChange={handleChange} />
                        <input type="email" name='email' placeholder="Su Email" value={formValue.email} onChange={handleChange} />
                        <input type="email" name='email2' placeholder="Repetir Email" value={formValue.email2} onChange={handleChange} />
                        <input type="tel" name='phone' placeholder="Teléfono" value={formValue.phone} onChange={handleChange} />
                        <Button className={"botones btn-send " + disabled} variant="primary" onClick={createOrder}>Completar Compra</Button>

                    </form>
                </div>
            </div>
            <div>
                <Button className="botones" variant="danger" onClick={clear}>Vaciar Carrito</Button>
                <Button className="botones" variant="primary" onClick={() => navigate('/')}>Seguir Comprando</Button>
            </div>
        </div>
    )
}
