import React from 'react'
import { useState } from 'react'
import { imagesList } from '../data'
function DisplayItems() {
    const [imagesData,setImagesData]=useState(imagesList)
    console.log(imagesData)
  return (
   <div className="display-images">
    {
        imagesData.map((eachItem)=>{
            return (
                <div className="image-card" key={eachItem.id}>
                    <img src={eachItem.img_item} alt='image' className='static-image'/>
                
                </div>
            )
        })
    }
   </div>
  )
}

export default DisplayItems