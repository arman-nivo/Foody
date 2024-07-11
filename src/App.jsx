import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/PlaceOrder/Placeorder'
import Home from '/src/pages/Home/Home.jsx'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
        <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route paath='/cart' element={<Cart></Cart>} />
        <Route path='/order' element = {<Placeorder></Placeorder>} /> 
      </Routes>
    </div>

    <Footer></Footer>
    </>

  )
}

export default App
