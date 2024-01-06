import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import ProductList from './Components/ProductList'
import { Route, Routes } from 'react-router-dom'
import Carts from './Components/pages/Carts'
function App() {
  return (
    <div>
      <Header/> 
      <Hero />
      <ProductList />
  {/* <Carts/>
      <Routes>
      {/* <Route path='' element={<Header></Header>}/> */}
      {/* <Route path='cart'element={<Carts/>}/>
        <Route path=''/>
      </Routes> */}
    
    
    </div>
  )
}

export default App
