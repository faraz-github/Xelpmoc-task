import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Container } from '@mui/system';
import { Link, useLocation } from 'react-router-dom';

import { useUser } from "../contexts/userContext";

export default function AppHeader() {

    const location = useLocation();
    const { setUser } = useUser();


    const logoutUser = () => {
        localStorage.removeItem("user");
        setUser(JSON.parse(localStorage.getItem("user")));
    }


    const renderButton = () => {
        switch (location.pathname) {
            case "/":
                return <Button color='secondary' variant='outlined' onClick={logoutUser}>LogOut</Button>
            case "/register":
                return <Button color='secondary' variant='outlined' component={Link} to="/login">Login</Button>
            case "/login":
                return <Button color='secondary' variant='outlined' component={Link} to="/register">Register</Button>
            default:
                console.log(location.pathname);
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" elevation={0}>
                <Container disableGutters>
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Fibonacci-Generator
                        </Typography>
                        {
                            renderButton()
                        }
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />
        </Box>

    )
}
