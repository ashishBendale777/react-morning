import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import ProdDetails from './ProdDetails'

const MyRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/productdetails' element={<ProdDetails/>}/>
        </Routes>
    </>
  )
}

export default MyRoutes