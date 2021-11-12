import { Button, Fade, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Purchase = ({ handlePurchaseClose, name, price, purchase }) => {
    const { user } = useAuth()
    const { initialInfo } = { name: user.displayName, email: user.email, phone: '' }
    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        setPurchaseInfo(newInfo);
    }
    const handlePurchaseSubmit = e => {
        const purchase = {
            ...purchaseInfo,
            Name: name,
            displayName: user.displayName,
            email: user.email,
        }
        // send to the server
        fetch('http://localhost:5000/purchasedone', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if (data.insertedId) {
                //     setBookingSuccess(true);
                //     handleBookingClose();
                // }
            });
        e.preventDefault()
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={purchase}
            onClose={handlePurchaseClose}
            closeAfterTransition
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={purchase}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handlePurchaseSubmit}>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="displayName"
                            defaultValue={user.displayName}
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            defaultValue={user.email}
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="Car Id"
                            onBlur={handleOnBlur}
                            defaultValue="Car id"
                            size="small"
                        />
                        <Button
                            type="submit"
                            sx={{
                                backgroundColor: 'black', marginTop: 5, color: '#fff',
                                '&:hover': {
                                    color: 'black',
                                },
                            }}
                        >Purchase Now
                        </Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default Purchase;