import { CheckBox } from '@mui/icons-material'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {


  let submitFromData = (e) => {
    e.preventDefault()

    let fData = new FormData(e.target)
    let formData = Object.fromEntries(fData.entries())
    console.log("DATA", formData);
  }
  return (
    <>
      <Box sx={{
        mt: 5,
        display: "flex",
        height: "100svh",
        width: "100svw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <Typography variant='h4'>Contact Form</Typography>
        <Box component="form"
          onSubmit={(e) => submitFromData(e)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            margin: 2
          }}>
          <TextField type='text' required label="Enter Full Name" name='fullname' />
          <TextField type='email' required label="Enter Email" name='email' />
          <TextField type='tel' label="Enter Mobile No" name='mobile' />
          <TextField type='text' label="Enter Address" name='address' />

          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row name="gender">
              <FormControlLabel label="Male" value="Male" control={<Radio />} />
              <FormControlLabel label="FeMale" value="Female" control={<Radio />} />
              <FormControlLabel label="Other" value="Other" control={<Radio />} />
            </RadioGroup>
          </FormControl>

          <FormLabel>Hobbies</FormLabel>
          <FormGroup row name="hobbies">
            <FormControlLabel control={<Checkbox />} label="Sports" />
            <FormControlLabel control={<Checkbox />} label="Music" />
            <FormControlLabel control={<Checkbox />} label="Dance" />
            <FormControlLabel control={<Checkbox />} label="Reading" />
          </FormGroup>
          <Button type='submit' variant='contained' color='primary'>Submit</Button>
        </Box>
      </Box>
    </>
  )
}

export default Contact