import React from 'react'
import { Box, Typography } from "@mui/material"
import cImage from "../assets/langs/c.png"

const About = () => {
  return (
    <>
      <Typography textAlign={"center"} variant='h3'>About Us</Typography>

      <Box sx={{
        display: 'flex',
        height: "100vh",
        mt: 3
      }}>
        <Box sx={{
          flex: 1,
          textAlign: 'justify',
          p: 2
        }}>
          <Typography variant='h4'> LEFT</Typography>
          <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi architecto nostrum ipsam cupiditate possimus quas libero, repellendus culpa iste deleniti similique mollitia accusantium laborum sed cumque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi at cupiditate voluptatum delectus quae dignissimos asperiores, laboriosam, veritatis earum exercitationem, eos corporis! In placeat sint porro numquam beatae quisquam delectus. voluptatibus temporibus eligendi.
          </Typography>

        </Box>
        <Box sx={{
          flex: 1,
          textAlign: 'justify',
          p: 2,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column"
        }}>
          {/* <Typography variant='h4'> RIGHT</Typography> */}
          {/* <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi architecto nostrum ipsam cupiditate possimus quas libero, repellendus culpa iste deleniti similique mollitia accusantium laborum sed cumque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi at cupiditate voluptatum delectus quae dignissimos asperiores, laboriosam, veritatis earum exercitationem, eos corporis! In placeat sint porro numquam beatae quisquam delectus. voluptatibus temporibus eligendi.
          </Typography> */}
          <Box component={"img"}
            src={cImage}
            sx={{
              height: 300,
              width: 300
            }}>

          </Box>
        </Box>
      </Box>
    </>
  )
}

export default About