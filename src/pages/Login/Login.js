import React, { useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useLocation, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 10 }} item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnchange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            name="password"
                            onBlur={handleOnchange}
                            label="Password"
                            variant="standard"
                        />
                        <Button sx={{
                            width: '75%', m: 1, backgroundColor: 'black', color: 'white',
                            '&:hover': {
                                color: 'black',
                            },
                        }} type="submit">Login</Button>
                        <Link style={{ textDecoration: 'none' }} to='/register'>
                            <Button sx={{
                                width: '75%', m: 1,
                                backgroundColor: 'black',
                                color: 'white',
                                '&:hover': {
                                    color: 'black',
                                },
                            }} variant="text" type="submit">New User? Please Register</Button>
                        </Link>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Successfully Created</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>-----------or----------</p>
                    <Button sx={{
                        backgroundColor: 'black', color: 'white',
                        '&:hover': {
                            color: 'black',
                        },
                    }}>Google Sign In</Button>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;