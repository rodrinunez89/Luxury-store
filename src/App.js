import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Component/pages/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import Cart from './Component/pages/Cart/Cart';
import Footer from './Component/Footer/Footer';
import { useEffect } from 'react';
import CartProvider from './Component/context/CartProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './Component/pages/ErrorPage/ErrorPage';



function App() {
  useEffect(() => {
    document.title = 'Luxury Store'
  }, [])
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
         </Routes>
      <Footer />
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
