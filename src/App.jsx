import { useState } from 'react'
import './App.css'
import { Navbar } from './assets/Components/navbar'
import OfferCarousel from './assets/Components/offercarousel'
import ProductSection from './assets/Components/productSection'
import { Routes, Route } from 'react-router-dom'
import CategoryProducts from './pages/CategoryProductpage'
import PaymentMethods from './assets/Components/paymentMethod'
import Footer from './assets/Components/footer'
import Category from './assets/Components/categories'

import SearchResult from './pages/searchresultpage'

import ProductDetails from './pages/productDetalis'
import Checkoutpage from './pages/checkoutpage'
import Cartpage from './pages/cartpage'
import Register from './pages/register'
import Login from './pages/login'
import Adminpage from './pages/adminpage'
import Userprofile from './pages/userprofile'
import ReturnPolicy from './pages/returnPolicy'


function App() {
  return (
 <>
      <Navbar />

      




      <Routes>

        <Route path="/" element={
          <>

            <OfferCarousel />
            <Category />
            <ProductSection />
            <PaymentMethods />

          </>
        }

        />

        <Route
          path="/category/:category"
          element={<CategoryProducts />}
        />

        <Route
          path="/search"
          element={<SearchResult />}
        />
      <Route
         path="/product/:id"
         element={<ProductDetails/>}/>
 
      <Route 
      path ="/checkout"
      element={<Checkoutpage/>} 
        />

      <Route
      path ="/cart"
      element={<Cartpage/>}
      />
    <Route
    path='/register'
    element ={<Register/>}
    />

    <Route
    path = "/login"
    element={<Login/>}
    />

    <Route 
    path='/admin'
    element={<Adminpage/>}
    />

    <Route 
    path ="profile"
    element={<Userprofile/>}/>

    <Route
    path ="/return-policy"
    element={<ReturnPolicy/>}
    />


      </Routes>

     <Footer />

     </>

      );
}
      export default App;
