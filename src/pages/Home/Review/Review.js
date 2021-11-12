import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import React from 'react';

const Review = () => {
    return (
        <Box sx={{ marginTop: 10 }}>
            <Typography variant='h5' sx={{ backgroundColor: 'black', color: 'white' }}>
                WHAT CUSTOMERS SAY?
            </Typography>
            <Box sx={{ flexGrow: 1, margin: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Paper>
                            <Typography variant='h5' sx={{ backgroundColor: 'black', color: 'white' }}>
                                Best Cars
                            </Typography>
                            <Typography variant='p'>
                                Over the next few pages of this review, we’ll delve into what the Subaru Outback is like to drive, how it performs compared with its rivals, whether it has the off-road chops to fend off traditional SUVs, how practical it is and how much it’ll cost to run.
                            </Typography>
                            <Typography>
                                <img src="https://pro-theme.com/html/autozone/assets/media/avatar_reviews/1.jpg" alt="" />
                                <h5>Kyle</h5>
                                <p>Customer</p>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper>
                            <Typography variant='h5' sx={{ backgroundColor: 'black', color: 'white' }}>
                                Best Cars
                            </Typography>
                            <Typography variant='p'>
                                Over the next few pages of this review, we’ll delve into what the Subaru Outback is like to drive, how it performs compared with its rivals, whether it has the off-road chops to fend off traditional SUVs, how practical it is and how much it’ll cost to run.
                            </Typography>
                            <Typography>
                                <img src="https://pro-theme.com/html/autozone/assets/media/avatar_reviews/2.jpg" alt="" />
                                <h5>William</h5>
                                <p>Customer</p>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper>
                            <Typography variant='h5' sx={{ backgroundColor: 'black', color: 'white' }}>
                                Best Cars
                            </Typography>
                            <Typography variant='p'>
                                Over the next few pages of this review, we’ll delve into what the Subaru Outback is like to drive, how it performs compared with its rivals, whether it has the off-road chops to fend off traditional SUVs, how practical it is and how much it’ll cost to run.
                            </Typography>
                            <Typography>
                                <img src="https://pro-theme.com/html/autozone/assets/media/avatar_reviews/3.jpg" alt="" />
                                <h5>Alex</h5>
                                <p>Customer</p>
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
};

export default Review;