import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componants/Home'
import About from './componants/About'
import MyFooter from './componants/MyFooter'
import MyAppBar from './componants/MyAppBar'
import MyRoutes from './componants/MyRoutes'
import { Box } from '@mui/material'
import DrawerAppBar from './componants/admin/DrawerAppBar'
import AdminRoutes from './componants/admin/AdminRoutes'

function App() {

  return (
    <>
      {/* <Box sx={{
        display: "flex",
        flexDirection: "column"
      }}>
        <Box sx={{
          flex: 1
        }}>
          <MyAppBar />
        </Box>
        <Box sx={{
          flexGrow: 1
        }}>
          <MyRoutes />
        </Box>
        <Box sx={{
          flex: 1
        }}>
          <MyFooter />
        </Box>
      </Box> */}
      {/* <DrawerAppBar/> */}
      <AdminRoutes />
    </>
  )
}

export default App
