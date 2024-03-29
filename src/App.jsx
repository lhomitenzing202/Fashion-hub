import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ShopCategory from './page/ShopCategory'
import Shop from './page/Shop'
import Cart from './page/Cart'
import Footer from './components/Footer/Footer'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'
import LoginSignup from './page/LoginSignup'
import Product from './page/Product'
import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar'


function App() {

  return (
    <>
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
      <Route path='/product' element ={<Product/>}/>
      <Route path='/product/:productId' element={<Product/>}></Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </div>
    </>
  )
}

export default App
