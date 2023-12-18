

import React from 'react'
import Header from './Header'
import ProductList from "./ProductList";
import Footer from './Footer';
import "./css/Home.css";
function Home() {
  return (
    <div className='main2'>
      <Header />
      <ProductList />
      <Footer />
    </div>
  )
}

export default Home