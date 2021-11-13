import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (

        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} sx={{ marginTop: 5 }}>
                    <Link to='/carlists' style={{ textDecoration: 'none' }}>
                        <Button style={{
                            backgroundColor: 'black',
                            marginTop: "200px",
                            color: '#fff',
                            '&:hover': {
                                color: 'black',
                            },
                        }}>Explore More</Button>
                    </Link>
                </Grid >
                <Grid item xs={12} sm={6} md={8} sx={{ marginTop: 5 }}>
                    <img className='img-fluid mt-3' src=" https://pro-theme.com/html/autozone/assets/media/main-slider/1.jpg" alt="" />
                </Grid >
            </Grid>
        </Box>

    );
};

export default Banner;