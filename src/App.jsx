import { Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import './App.css'
import ProductsPage from './pages/ProductsPage'
function App() {


  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/products/:firmId' element={<ProductsPage/>}/>
    </Routes>
  
  )
}

export default App
