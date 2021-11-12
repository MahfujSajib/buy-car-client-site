import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const OurPartners = () => {
    return (
        <Box sx={{ flexGrow: 1, m: 2, marginBottom: 10 }}>
            <Typography variant='h4' sx={{ backgroundColor: 'black', color: 'white' }}>
                Our Partners
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: 5 }}>
                    <Paper elevation={3} sx={{ py: 5 }}>
                        <img src="https://pro-theme.com/html/autozone/assets/media/brands/brand-8.jpg" alt="" />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: 5 }}>
                    <Paper elevation={3} sx={{ py: 5 }}>
                        <img src="https://pro-theme.com/html/autozone/assets/media/brands/brand-4.jpg" alt="" />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: 5 }}>
                    <Paper elevation={3} sx={{ py: 5 }}>
                        <img src="https://pro-theme.com/html/autozone/assets/media/brands/brand-4.jpg" alt="" />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: 5 }}>
                    <Paper elevation={3} sx={{ py: 5 }}>
                        <img src="https://pro-theme.com/html/autozone/assets/media/brands/brand-4.jpg" alt="" />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default OurPartners;