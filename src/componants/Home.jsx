import { Box, Button, Slider, Typography } from '@mui/material'
import React, { useState } from 'react'

const Home = () => {
  //reacct hooks
  let [counter, setcounter] = useState(0)
  let [mColor, setmColor] = useState("red")

  let [mFontSize, setFontSize] = useState(50)

  let friends = ["Ashish", "Sam", "Pawan", "Amol"]
  return (
    <>
      <Box>
        <Button onClick={() => setcounter(--counter)} variant='outlined' color='primary'>-</Button>
        <Typography variant='h3'>{counter}</Typography>
        <Typography variant='h3'>{friends[counter]}</Typography>
        <Button onClick={() => {
          setcounter(++counter)
        }} variant='outlined' color='primary'>+</Button>
      </Box>
      <Box sx={{
        backgroundColor: mColor
      }} height={100} width={100}
        onClick={() => setmColor("blue")}>

      </Box>
      <Slider
        aria-label="Font Size"
        defaultValue={0}
        step={5}
        onChange={(e) => setFontSize(e.target.value)}
        color="secondary"
      />
      <Typography sx={{
        fontSize: mFontSize
      }}>HI</Typography>
    </>
  )
}

export default Home