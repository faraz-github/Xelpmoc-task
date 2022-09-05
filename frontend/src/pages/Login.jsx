import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useUser } from "../contexts/userContext";

function Login() {

    const navigate = useNavigate();
    const { user, setUser } = useUser();

    useEffect(() => {
        if (user) navigate("/");
    }, [user, navigate]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const response = await axios.post("/login", { email, password });
        localStorage.setItem("user", JSON.stringify(response.data));
        setUser(JSON.parse(localStorage.getItem("user")));
        setEmail("");
        setPassword("");
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmitHandler}>
                <input
                    type={"email"}
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <input
                    type={"password"}
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
                < button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;