import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useUser } from "../contexts/userContext";
import { Button, Container, List, ListItem, Paper, Stack, TextField, Typography } from "@mui/material";

function Home() {

    const navigate = useNavigate();
    const { user } = useUser();

    useEffect(() => {
        if (!user) navigate("/login");
    }, [user, navigate]);

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [series, setSeries] = useState([]);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const response = await axios.post("/fibonacci", { num1, num2 });
        setSeries(response.data.sequence);
    }

    return (
        <Container
            disableGutters
            className="viewportContainer"
            sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
            <Stack spacing={1}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>User Input</Typography>
                    <form onSubmit={onSubmitHandler}>
                        <Stack direction={"column"} spacing={1}>
                            <TextField
                                variant="outlined"
                                size="small"
                                label="First Number"
                                type={"number"}
                                name="num1"
                                value={num1}
                                onChange={(event) => setNum1(event.target.value)}
                                required
                            />
                            <TextField
                                variant="outlined"
                                size="small"
                                label="Second Number"
                                type={"number"}
                                name="num2"
                                value={num2}
                                onChange={(event) => setNum2(event.target.value)}
                                required
                            />
                            <Button variant="contained" disableElevation type="submit">Generate</Button>
                        </Stack>
                    </form>
                </Paper>
                <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>Fibonacci Series</Typography>
                    <List dense>
                        {
                            series.length !== 0
                                ? series.map((item, index) => {
                                    return <ListItem key={index}>
                                        {item}
                                    </ListItem>
                                })
                                : <ListItem>
                                    Please generate the series
                                </ListItem>
                        }
                    </List>

                </Paper>
            </Stack>
        </Container>
    )
}

export default Home;