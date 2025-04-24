import { Box, Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'




const Products = () => {
    const [allProducts, setallProducts] = useState([])
    let navigator = useNavigate()
    const [isOpenDialog, setisOpenDialog] = useState(false)

    const [selectedProduct, setselectedProduct] = useState(null)

    useEffect(() => {
        let fetchProducts = async () => {
            let result = await axios.get("https://dummyjson.com/products")
            console.log("DARA", result.data.products);
            setallProducts(result.data.products)
        }

        //function call
        fetchProducts()
    }, [])

    let openDialog = (product) => {
        setselectedProduct(product)
        setisOpenDialog(true)
    }

    let closeDialog = () => {
        setisOpenDialog(false)
        setselectedProduct(null)
    }

    return (
        <>
            <Box sx={{
                mt: 10
            }}>
                <Grid container>
                    {
                        allProducts.map((prod) => {
                            return (
                                <Grid item
                                    // onClick={() => navigator("/productdetails", { state: prod })}
                                    size={{
                                        sm: 12,
                                        md: 6,
                                        lg: 3
                                    }}>
                                    <Card>
                                        <CardMedia onClick={() => {
                                            openDialog(prod)
                                        }} component="img" image={prod.thumbnail} />
                                        <CardContent>
                                            <Typography variant='h4'>{prod.title}</Typography>
                                            {/* <Typography variant='h4'>{prod.description}</Typography> */}
                                            <Typography variant='h4' color={prod.price > 100 ? "error" : "success"}>{prod.price}</Typography>
                                            <Typography variant='h4'>{prod.category}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button variant='outlined'>Add To Cart</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
            <Dialog open={isOpenDialog} onClose={closeDialog}>
                <DialogTitle>Product Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {selectedProduct?.title}
                    </DialogContentText>
                    <DialogContentText>
                        {selectedProduct?.price}
                    </DialogContentText>

                    <DialogContentText>
                        {selectedProduct?.category}
                    </DialogContentText>

                    <DialogContentText>
                        {selectedProduct?.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color='error' onClick={() => closeDialog()}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Products