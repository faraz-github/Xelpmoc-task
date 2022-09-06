import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useUser } from "../contexts/userContext";

function Home() {

    const navigate = useNavigate();
    const { user, setUser } = useUser();

    useEffect(() => {
        if (!user) navigate("/login");
    }, [user, navigate]);

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const response = await axios.post("/fibonacci", { num1, num2 });
        console.log(response);
    }

    const logoutUser = () => {
        localStorage.removeItem("user");
        setUser(JSON.parse(localStorage.getItem("user")));
    }

    return (
        <div>
            <div>
                <h1>Fibonacci</h1>
                <form onSubmit={onSubmitHandler}>
                    <input
                        type={"text"}
                        name="num1"
                        value={num1}
                        onChange={(event) => setNum1(event.target.value)}
                        required
                    />
                    <input
                        type={"text"}
                        name="num2"
                        value={num2}
                        onChange={(event) => setNum2(event.target.value)}
                        required
                    />
                    < button type="submit">Generate Sequence</button>
                </form>
            </div>
            {
                user ? <button onClick={logoutUser}>LogOut</button> : null
            }
        </div>
    )
}

export default Home;