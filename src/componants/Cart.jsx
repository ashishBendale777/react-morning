import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreQty, increQty } from '../reduxwork/CartSlice'

const Cart = () => {
    let { cartItems, cartTotal } = useSelector((state) => state.cart)

    let dispatcher = useDispatch()
    return (
        <>
            <Box sx={{
                mt: 10
            }}>
                <Typography variant='h3'>Cart Items</Typography>
                <Grid container>
                    {
                        cartItems.map((prod) => {
                            let pId = prod.id
                            return (
                                <Grid item
                                    // onClick={() => navigator("/productdetails", { state: prod })}
                                    size={{
                                        sm: 12,
                                        md: 6,
                                        lg: 3
                                    }}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant='h4'>{prod.id}</Typography>
                                            <Typography variant='h4'>{prod.title}</Typography>
                                            {/* <Typography variant='h4'>{prod.description}</Typography> */}
                                            <Typography variant='h4' color={prod.price > 100 ? "error" : "success"}>{prod.price}</Typography>
                                            <Typography variant='h4'>{prod.category}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={() => dispatcher(decreQty({ pId }))} variant='contained' color='error'>-</Button>
                                            <Typography variant='h4'>{prod.Qty}</Typography>
                                            <Button onClick={() => dispatcher(increQty({ pId }))} variant='contained' color='primary'>+</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}

export default Cart