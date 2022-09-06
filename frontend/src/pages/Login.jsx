import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Alert, Box, Button, Container, Stack, TextField, Typography } from "@mui/material";

import { useUser } from "../contexts/userContext";

function Login() {

    const navigate = useNavigate();
    const { user, setUser } = useUser();

    useEffect(() => {
        if (user) navigate("/");
    }, [user, navigate]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setErrorMessage("");
        try {
            const response = await axios.post("/login", { email, password });
            localStorage.setItem("user", JSON.stringify(response.data));
            setUser(JSON.parse(localStorage.getItem("user")));
            setEmail("");
            setPassword("");
        } catch (error) {
            if (error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                console.log(error);
            }
        }

    }

    return (
        <Container
            disableGutters
            className="viewportContainer"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Box>
                <Typography variant="h2" gutterBottom>Login</Typography>
                <form onSubmit={onSubmitHandler}>
                    <Stack direction={"column"} spacing={1}>
                        <TextField
                            variant="outlined"
                            label="Email"
                            type={"email"}
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                        <TextField
                            variant="outlined"
                            label="Password"
                            type={"password"}
                            name="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                        <Button variant="contained" disableElevation type="submit">Login</Button>
                        {
                            errorMessage && <Alert severity="error">{errorMessage}</Alert>
                        }
                    </Stack>

                </form>
            </Box>
        </Container>
    )
}

export default Login;