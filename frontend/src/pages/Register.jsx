import { useState } from "react";
import axios from "axios";

import { useUser } from "../contexts/userContext";

function Register() {

    const { setUser } = useUser();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const response = await axios.post("/register", { email, password });
        localStorage.setItem("user", JSON.stringify(response.data));
        setUser(JSON.parse(localStorage.getItem("user")));
        setEmail("");
        setPassword("");
    }

    return (
        <div>
            <h1>Register</h1>
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
                < button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;