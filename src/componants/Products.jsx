import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Stack, Typography } from '@mui/material'
import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addItem } from '../reduxwork/CartSlice'
import { useDispatch } from 'react-redux'



const Products = () => {
    const [allProducts, setallProducts] = useState([])
    const [filterProducts, setfilterProducts] = useState([])

    let navigator = useNavigate()
    const [isOpenDialog, setisOpenDialog] = useState(false)

    const [selectedProduct, setselectedProduct] = useState(null)

    const [selectedCategory, setselectedCategory] = useState("All")

    let dispatcher = useDispatch()

    useEffect(() => {
        let fetchProducts = async () => {
            let result = await axios.get("https://dummyjson.com/products")
            console.log("DARA", result.data.products);
            setallProducts(result.data.products)
        }

        //function call
        fetchProducts()
    }, [])

    //for filteration
    useEffect(() => {
        let filterProd = allProducts.filter((prod) => prod.category == selectedCategory)
        setfilterProducts(filterProd)

        if (selectedCategory == "All") {
            setfilterProducts(allProducts)
        }
    }, [selectedCategory, allProducts])



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
                <Stack sx={{
                    justifyContent: "center"
                }} direction="row" spacing={2}>
                    <Chip label="All" onClick={() => setselectedCategory("All")} variant='filled' color='info' />
                    <Chip label="Beauty" onClick={() => setselectedCategory("beauty")} variant='filled' color='info' />
                    <Chip label="Fragrance" onClick={() => setselectedCategory("fragrances")} variant='filled' color='info' />
                    <Chip label="Furniture" onClick={() => setselectedCategory("furniture")} variant='filled' color='info' />
                    <Chip label="Grossary" onClick={() => setselectedCategory("groceries")} variant='filled' color='info' />
                </Stack>
                <Grid container>
                    {
                        filterProducts.map((prod) => {
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
                                            <Button onClick={() => {
                                                dispatcher(addItem(prod))
                                                alert("Added")
                                            }} variant='outlined'>Add To Cart</Button>
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