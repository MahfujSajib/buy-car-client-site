import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password Did not Matched');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 10 }} item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        Please Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            label="Password"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            label="Retype Password"
                            variant="standard"
                        />
                        <Button sx={{
                            width: '75%',
                            m: 1,
                            backgroundColor: 'black',
                            color: 'white',
                            '&:hover': {
                                color: 'black',
                            },
                        }} type="submit">Register</Button>
                        <Link style={{ textDecoration: 'none' }} to='/login'>
                            <Button sx={{
                                width: '75%',
                                m: 1,
                                backgroundColor: 'black',
                                color: 'white',
                                '&:hover': {
                                    color: 'black',
                                },
                            }} variant="text" type="submit">Already Registerd? Please Login</Button>
                        </Link>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Successfully Created</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;




{/* <Button sx={{
                            width: '75%', m: 1,
                            backgroundColor: 'black',
                            color: 'white',
                            '&:hover': {
                                color: 'black',
                            },
                        }} type="submit">Register</Button>
                        <Link style={{ textDecoration: 'none' }} to='/login'>
                            <Button sx={{
                                width: '75%', m: 1,
                                backgroundColor: 'black',
                                color: 'white',
                                '&:hover': {
                                    color: 'black',
                                },
                            }} variant="text" type="submit">Already Registerd? Please Login</Button>
                        </Link> */}