import React from 'react'
import Navbar from '../components/Navbar'
import ProductsDetails from '../components/productsDetails'
function ProductsPage(props) {
  
  return (
    <div className="products-container">
        <Navbar/>
      <div className='product-sizing'>
      <ProductsDetails />
      </div>
        
    </div>
  )
}

export default ProductsPage