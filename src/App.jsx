import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import { CarritoProvider } from './context/CarritoContext';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Ckeckout';

function App() {
  return (
    <>
    <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart' element = { <Cart/> } />
          <Route path='/checkout' element = { <Checkout/> } />
          <Route path='*' element={<h2>Sitio en Construcción</h2>} />
        </Routes>
      </CarritoProvider>
    </BrowserRouter>

  </>
  );
}

export default App;
