import { Flare } from '@mui/icons-material'
import { AppBar, Badge, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MyAppBar = () => {
    let navigator = useNavigate()

    const { itemCount } = useSelector((state) => state.cart)
    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h4'>
                        My Shop
                    </Typography>
                    <List
                        sx={{
                            display: "flex"
                        }}>
                        <ListItem onClick={() => {
                            navigator("/")
                        }}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText>
                                Home
                            </ListItemText>
                        </ListItem>

                        <ListItem onClick={() => {
                            navigator("/about")
                        }}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText>
                                About
                            </ListItemText>
                        </ListItem>

                        <ListItem onClick={() => {
                            navigator("/products")
                        }}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText>
                                Products
                            </ListItemText>
                        </ListItem>

                        <ListItem onClick={() => {
                            navigator("/contact")
                        }}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText>
                                Contact
                            </ListItemText>
                        </ListItem>

                        <ListItem onClick={() => {
                            navigator("/cart")
                        }}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <Badge badgeContent={itemCount} color='error'>
                                <ListItemText>
                                    Cart
                                </ListItemText>
                            </Badge>
                        </ListItem>

                        <ListItem onClick={() => {
                            navigator("/profile")
                        }}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText>
                                Profile
                            </ListItemText>
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default MyAppBar