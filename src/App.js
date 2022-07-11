import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound'
import Cart from './container/Cart'
import ShopProvider from './context/ShopProvider';


function App() {
  return (
    <ShopProvider>
      <BrowserRouter>         {/* >>>>>ENGLOBA NUESTRO SITIO PARA DARLE NAVEGABILIDAD */}
        <div className="container-principal">
          <NavBar />
          <Routes>          {/* >>>>>DEFINIMOS TODAS LAS RUTAS DE NUESTRA NAVEGACION EN EL COMP. ROUTES */}
            <Route path='/' element={<ItemListContainer/>}></Route>         {/* >>>>> / ES LO PRIMERO QUE SE VE, Y ELEMENTO ES EL ELEMENTO QUE VAMOS A RENDERIZAR */}
            <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<NotFound/>}></Route> 
          </Routes>
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
