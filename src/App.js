import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <CartProvider>
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greetting='Envío grátis a partir de $210.000'/> }/>
      <Route path='/categories/:categoryId' element={<ItemListContainer greetting='Categoría:'/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='*' element={<h2>404: No existe</h2>}/>
    </Routes>
  </BrowserRouter> 
  </CartProvider>
  );
}
export default App;
