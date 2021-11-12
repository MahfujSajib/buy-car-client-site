import * as React from 'react';
import { Grid } from '@mui/material';
import PurchaseHistory from '../PurchaseHistory/PurchaseHistory';

const DashboardHome = () => {
    return (

        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
                <PurchaseHistory></PurchaseHistory>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;