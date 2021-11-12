import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { name, description, img, price } = props.product;
    return (
        <Grid item xs={12} sm={6} md={4} sx={{ marginTop: 5 }}>
            <Paper elevation={3} sx={{ py: 5 }}>
                <img src={img} alt="" />
                <Typography sx={{ color: 'black' }} variant="h4" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography sx={{ my: 3 }} variant="p" gutterBottom component="div">
                    {description}
                </Typography>
                <Typography variant="h6" display="block" gutterBottom>
                    {price}
                </Typography>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <Button sx={{
                        backgroundColor: 'black', marginTop: 5, color: '#fff',
                        '&:hover': {
                            color: 'black',
                        },
                    }}>Purchase Now</Button>
                </Link>
            </Paper>
        </Grid >
    );
};

export default Product;
