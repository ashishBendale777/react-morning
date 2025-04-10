import { Box, Paper } from '@mui/material'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const MyFooter = () => {
    return (
        <>
            <Paper sx={{
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 3
                // backgroundColor: "blue"
            }}>
                <GoogleIcon sx={{
                    fontSize:"100px"
                }} />
                <WhatsAppIcon fontSize={"medium"} />
                <FacebookIcon fontSize={"large"} />
                <InstagramIcon fontSize={"large"} />
                <TwitterIcon fontSize={"small"} />

            </Paper>
        </>
    )
}

export default MyFooter