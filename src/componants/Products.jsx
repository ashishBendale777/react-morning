import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'




const Products = () => {
    const [allProducts, setallProducts] = useState([])
    let navigator = useNavigate()

    useEffect(() => {
        let fetchProducts = async () => {
            let result = await axios.get("https://dummyjson.com/products")
            console.log("DARA", result.data.products);
            setallProducts(result.data.products)
        }

        //function call
        fetchProducts()
    }, [])

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
                                    onClick={() => navigator("/productdetails", { state: prod })}
                                    size={{
                                        sm: 12,
                                        md: 6,
                                        lg: 3
                                    }}>
                                    <Card>
                                        <CardMedia component="img" image={prod.thumbnail} />
                                        <CardContent>
                                            <Typography variant='h4'>{prod.title}</Typography>
                                            {/* <Typography variant='h4'>{prod.description}</Typography> */}
                                            <Typography variant='h4'>{prod.price}</Typography>
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
        </>
    )
}

export default Products