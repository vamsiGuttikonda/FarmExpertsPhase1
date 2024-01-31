import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/productPage/ProductsListView'
import CartPage from './pages/CartPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Error from './pages/Error'
import Navbar from './components/common/navbar/Navbar'
import TopDiscount from './components/common/TopDiscount'
import './App.css'
import 'slick-carousel/slick/slick.css'; // Import slick styles here
import 'slick-carousel/slick/slick-theme.css';
import ProductViewPage from './pages/singleProductPage/ProductViewPage'
import CheckoutPage from './pages/CheckoutPage'

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
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/productview' element={<ProductViewPage/>}/>
        <Route path='*' element={<Error/>}/>

        
      </Routes>
    </BrowserRouter>

    </>
    
    
  )
}
export default App;
