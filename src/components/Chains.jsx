import React from 'react'
import {useState,useEffect} from 'react'
import { api } from '../api'
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { TailSpin } from 'react-loader-spinner'
function Chains() {
      const [restaurent,setRestaurent]=useState([])
      const [scrollPosition,setScrollPosition]=useState(0)
      const [loading,setLoading]=useState(true)

  const getAllfirmDetails=async()=>{

    try {
      const response=await fetch(`${api}/vendor/all-vendors`);
      const data=await response.json()
      console.log("api data man...",data)
      setRestaurent(data)
      setLoading(false)
      
    } catch (error) {
      alert("Request Failed.....");
      
    } 
  }

  useEffect(()=>{
    getAllfirmDetails()
  },[])
const handleScroll=(direction)=>{
  const imagesContainer=document.getElementById('imagesContainer');
    const scrollAmount=500;
  if(direction==='left'){
    imagesContainer.scrollTo({
      left:imagesContainer.scrollLeft-scrollAmount,
      behavior:'smooth'
    })
  }else if(direction==='right'){
    imagesContainer.scrollTo({
      left:imagesContainer.scrollLeft+scrollAmount,
      behavior:'smooth'
    })

  }
}


 return(<>
 {
  loading ? (
    <div className='loading-container'>
    
  <TailSpin
  visible={true}
  height="80"
  width="80"
  color="orange"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  

  ) : ( <>
    <div className="buttons-container">
    <button onClick={()=>handleScroll('left')}><FaArrowCircleLeft size={20}/> </button>
      <button onClick={()=>handleScroll('right')}><FaArrowCircleRight size={20}/> </button>
    </div>
    <h1 className='title'>Top Restaurent Chains in Hyderabad</h1>
    <section className="chains-container" id='imagesContainer' onScroll={(e)=>setScrollPosition(e.target.scrollLeft)} scrollLeft={scrollPosition}>
     {restaurent.vendors && 
        restaurent.vendors.map((eachItem)=>{
          return(
            <div className="vendor-card" key={eachItem._id}>
              {
              eachItem.firm.map((Item)=>{
                return(
                  <div key={Item._id} id={Item.id}>
                  {/* <h1 >
                    {
                      Item.firmName
                    }
                  </h1> */}
                  <img src={`${api}/uploads/${Item.image}`} alt="images" className="rest-images" />
                  </div>
                )
              })
              }
            </div>
          )
        })
      }
    
    </section>
    </>)
 }
 
 </>)
}

export default Chains