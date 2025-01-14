import React from 'react'
import Navbar from '../components/Navbar'
import DisplayItems from '../components/DisplayItems'
import Chains from '../components/Chains'
import Restarents from '../components/Restarents'
function LandingPage() {
  return (
   <>
   <Navbar/>
   <div className="features-container">
   <DisplayItems/>
   <Chains/>
   <Restarents/>
   </div>
   </>
  )
}

export default LandingPage