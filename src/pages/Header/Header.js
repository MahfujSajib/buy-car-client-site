import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">CAR HUB</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
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
                                    <Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'>
                                        <Button style={{ color: 'white' }}>Dashboard</Button>
                                    </Link>
                                    <Button onClick={logOut} style={{ color: 'white' }}>Logout</Button>
                                </Box>

                                :
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                    <Button color="inherit">Login</Button>
                                </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;













{/* <Box sx={{ flexGrow: 1 }}>
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
        </Box> */}



























{/* <Link to='/login' style={{ textDecoration: 'none' }}>
    <Button sx={{ backgroundColor: '#1976d2', color: 'white', textDecoration: 'none' }} variant="h6" color="inherit">Login</Button>
</Link> */}