import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ShopCategory from './page/ShopCategory'
import Shop from './page/Shop'
import { LoginSignup } from './page/LoginSignup'
import { Product } from './page/Product'
import Cart from './page/Cart'

function App() {

  return (
    <>
    <div>
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory category="men"/>}/>
      <Route path='/womens' element={<ShopCategory category="women"/>}/>
      <Route path='/kids' element={<ShopCategory category="kid"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':ProdcuctId' element ={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    </BrowserRouter>
   
    </div>
    </>
  )
}

export default App
