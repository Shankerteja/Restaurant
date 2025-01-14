import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { api } from '../api'
function ProductsDetails(props) {
  const [productDetails,setProductDetails]=useState([]);
  const [restName,setRestName]=useState(false)
  const {firmId}=useParams()
  console.log(firmId)

const getProductDetails=async()=>{
    try {
        const response=await fetch(`${api}/product/${firmId}/products`)
        const data=await response.json();
        console.log("gor product details man........",data)
        console.log(data.restaurantName)
        setProductDetails(data.products)
        setRestName(data.restaurantName)

    } catch (error) {
        console.log(error)
        alert("Request Failed....")
        
    }
}
useEffect(()=>{
   getProductDetails()
},[])

  return (
    <div className="products-details-container">
       <div className="restaurant-name-container">
        <h2>
            {restName && restName}
        </h2>
       </div>
        {
            productDetails.map((eachItem)=>{
                return(
                    <div className="product-card">
                        <div className="product-content">
                            <strong>{eachItem.productName}</strong>
                            <p>${eachItem.price}</p>
                            <p>{eachItem.description}</p>
                        </div>
                        <div className='product-image-container'>
                            <img src={`${api}/uploads/${eachItem.image}`} alt="images" className='product-image'/>
                            <button className="add-button">Add</button>
                            </div>

                    </div>
                )
            })
        }

    </div>
  )
}

export default ProductsDetails