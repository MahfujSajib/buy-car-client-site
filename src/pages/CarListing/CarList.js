import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Purchase from '../Purchase/Purchase'
import Purchased from '../Purchase/Purchased/Purchased';

const CarList = (props) => {
    const { id, name, img, price } = props.carList;
    const [purchase, setPurchase] = React.useState(false);
    const handlePurchase = () => setPurchase(true);
    const handlePurchaseClose = () => setPurchase(false);
    return (
        <>

            <Grid item xs={12} sm={6} md={4} sx={{ marginTop: 5 }}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <img src={img} alt="" />
                    <Typography sx={{ color: 'black' }} variant="h4" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" display="block" gutterBottom>
                        {price}
                    </Typography>
                    <Button onClick={handlePurchase} sx={{
                        backgroundColor: 'black', marginTop: 5, color: '#fff',
                        '&:hover': {
                            color: 'black',
                        },
                    }}>Purchase Now</Button>
                </Paper>
            </Grid >
            <Purchase
                id={id}
                name={name}
                price={price}
                purchase={purchase}
                handlePurchaseClose={handlePurchaseClose}
            >

            </Purchase>
        </>
    );
};

export default CarList;