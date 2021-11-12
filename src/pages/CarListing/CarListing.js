import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CarList from './CarList';


const CarListing = () => {
    const [carLists, setCarLists] = useState([]);
    useEffect(() => {
        fetch('/carLists.json')
            .then(res => res.json())
            .then(data => setCarLists(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1, m: 2 }}>
            <Grid container spacing={2}>
                {
                    carLists.map(carList => <CarList carList={carList}></CarList>)
                }
            </Grid>
        </Box>
    );
};

export default CarListing;