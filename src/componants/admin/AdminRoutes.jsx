import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import AddProduct from './AddProduct'
import AllProd from './AllProd'
import Orders from './Orders'
import DrawerAppBar from './DrawerAppBar'

const AdminRoutes = () => {
  return (
    <>
      <DrawerAppBar/>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/products' element={<AllProd />} />
        <Route path='/orders' element={<Orders />} />
      </Routes >
    </>
  )
}

export default AdminRoutes