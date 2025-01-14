import React from 'react'
import {useState,useEffect} from 'react'
import { api } from '../api'
import { Link } from 'react-router-dom'
function Restarents() {
    const [restDetails,setRestDetails]=useState(false)
    const [selectedRegion,setRegion]=useState("All")


    const getRstaurentDetails=async()=>{

      try {
       
         const response=await fetch(`${api}/vendor/all-vendors`);
              const data=await response.json()
        console.log(data)
        setRestDetails(data)
        
      } catch (error) {
        alert('Request Failed......')
        
      }
    }
    const handleFilter=(region)=>{
      setRegion(region)

    }
useEffect(()=>{
  getRstaurentDetails()
},[])

  return (
    <>
    <h2 className='rest-heading'>Online Service Restaurents</h2>
    <div className="filter-container">
      <button onClick={()=>handleFilter("All")}> All</button>
      <button onClick={()=>handleFilter("North-indian")}>North India</button>
      <button onClick={()=>handleFilter("south-indian")}>South India</button>
      <button onClick={()=>handleFilter("chinese")}>Chinese</button>
    </div>
    <div className="restaurent-container">
      {
        restDetails && restDetails.vendors.map((eachItem)=>{
          return (
            <>
            {
              eachItem.firm.map((Item)=>{
                if(selectedRegion==='All' || Item.region.includes(selectedRegion.toLocaleLowerCase())){
                  return(
                    <Link to={`/products/${Item._id}`} className='link'>
                    <div className="firm-container">
                     <div className='main-details'>
                     <img src={`${api}/uploads/${Item.image}`} alt="" className="rest-image" />
                     <h3 className='offer'>{Item.offer}</h3>
                     </div>
                   <div className="other-details">
                     <strong>{Item.firmName}</strong>
                    <p>{Item.region.join(',')}</p>
                   <p>{Item.area}</p>
                   </div>
                   </div>
                  </Link>
                 
                  )

                }
      
              })
            }
            </>
          )
        })  }
      
    </div>
    </>
  )
}

export default Restarents