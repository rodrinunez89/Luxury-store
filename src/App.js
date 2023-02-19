import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Component/ClassComponent/NavBar';
import ItemListContainer from './Component/pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Component/pages/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import Cart from './Component/pages/Cart/Cart';



function App() {
  return (
    <BrowserRouter>
    
    <NavBar/>
    
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
