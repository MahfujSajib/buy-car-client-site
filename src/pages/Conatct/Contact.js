import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

const Contact = () => {
    const [name, setName] = React.useState('');
    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50%', marginTop: '50px' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography variant='h5'>
                Contact Us
                <hr style={{ width: '100%', }} />
            </Typography>
            <TextField
                id="outlined-name"
                label="Name"
                value={name}
                onChange={handleChange}
            />
            <TextField
                id="outlined-email"
                label="email"
            />
            <TextField
                id="outlined-email"
                label="write your comment"
            />
            <br />
            <input style={{ width: '100px', backgroundColor: 'Royalblue', color: 'white', fontSize: 18 }} type="submit" value="submit" />
        </Box>
    );
};

export default Contact;