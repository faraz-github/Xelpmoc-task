import { useState } from "react";

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log({ email, password });
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