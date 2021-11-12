import { Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <h3>About Us</h3>
            <div className='bgimage' style={{ marginTop: 10 }}>
                <Typography variant='h5'>
                    Why Car Hub?
                </Typography>
            </div>
            <Box sx={{ flexGrow: 1, m: 15 }}>
                <Grid container spacing={2} sx={{ backgroundColor: 'black', color: 'white', p: 5 }}>
                    <Grid item xs={12} md={4}>
                        <Paper>
                            <Typography variant='h4'>
                                Secured Payment Guarantee
                            </Typography>
                            <Typography variant='p'>
                                Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper>
                            <Typography variant='h4'>
                                Help Center & Support 24/7
                            </Typography>
                            <Typography variant='p'>
                                Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper>
                            <Typography variant='h4'>
                                Booking any Class Vehicles
                            </Typography>
                            <Typography variant='p'>
                                Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper>
                            <Typography variant='h4'>
                                Business Services
                            </Typography>
                            <Typography variant='p'>
                                Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper>
                            <Typography variant='h4'>
                                Car Sharing Options
                            </Typography>
                            <Typography variant='p'>
                                Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper>
                            <Typography variant='h4'>
                                Chauffeur Hire
                            </Typography>
                            <Typography variant='p'>
                                Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AboutUs;