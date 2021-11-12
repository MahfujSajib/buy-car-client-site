import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'black', color: 'white', mt: 5 }}>
            <Typography variant='h5'>
                CAR HUB
            </Typography>
            <Typography variant='h5'>
                SHOWROOM LOCATION :
                32 Market St.128, Deeja Town, Florida, CA 12345
            </Typography>
            <Typography variant='h5'>
                Phone: +1 (234) 567 8900
                <br />
                Fax: +1 (234) 567 8998
                <br />
                email: mahfujk087@gmail.com
                <br />
                Hours: Mon - Fri :: 9am - 6pm
            </Typography>
        </Box>
    );
};

export default Footer;