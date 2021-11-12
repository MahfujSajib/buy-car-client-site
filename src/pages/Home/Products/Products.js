import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Box sx={{ flexGrow: 1, m: 2 }}>
            <Grid container spacing={2}>
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </Grid>
        </Box>
    );
};

export default Products;