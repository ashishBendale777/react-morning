import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componants/Home'
import About from './componants/About'
import MyFooter from './componants/MyFooter'

function App() {

  return (
    <>
      <Home />
      {/* <About /> */}
      <MyFooter />
    </>
  )
}

export default App
