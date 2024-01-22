import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/productPage/Product'
import CartPage from './pages/CartPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Error from './pages/Error'
import Navbar from './components/common/navbar/Navbar'
import TopDiscount from './components/common/TopDiscount'
import './App.css'
import 'slick-carousel/slick/slick.css'; // Import slick styles here
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (

    <>
      <TopDiscount/>
      <Navbar/>
      <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<Error/>}/>

        
      </Routes>
    </BrowserRouter>

    </>
    
    
  )
}
export default App;
