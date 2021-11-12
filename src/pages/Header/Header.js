import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CAR HUB
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}

                    >
                        <Link
                            style={{ textDecoration: 'none', color: 'white', margin: 20 }}
                            to='/home'>
                            Home
                        </Link>
                        <Link
                            style={{ textDecoration: 'none', color: 'white', margin: 20 }}
                            to='/aboutus'>
                            About Us
                        </Link>
                        <Link
                            style={{ textDecoration: 'none', color: 'white', margin: 20 }}
                            to='/carlists'>
                            Car List
                        </Link>
                        <Link
                            style={{ textDecoration: 'none', color: 'white', margin: 20 }}
                            to='/contact'>
                            Contact
                        </Link>
                    </Typography>
                    {
                        user?.email ?
                            <Box>
                                <Button onClick={logOut} color="inherit">Logout</Button>
                            </Box>

                            :
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit" variant="h6">Login</Button>
                            </Link>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;






{/* <Link to='/login' style={{ textDecoration: 'none' }}>
    <Button sx={{ backgroundColor: '#1976d2', color: 'white', textDecoration: 'none' }} variant="h6" color="inherit">Login</Button>
</Link> */}