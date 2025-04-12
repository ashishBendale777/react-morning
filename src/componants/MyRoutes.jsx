import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import About from './About'
import Contact from './Contact'

const MyRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </>
  )
}

export default MyRoutes