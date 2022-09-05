import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../contexts/userContext";

function Home() {

    const navigate = useNavigate();
    const { user, setUser } = useUser();

    useEffect(() => {
        if (!user) navigate("/login");
    }, [user, navigate]);

    const logoutUser = () => {
        localStorage.removeItem("user");
        setUser(JSON.parse(localStorage.getItem("user")));
    }

    return (
        <div>
            Home Page: Protected
            <br />
            {
                user ? <button onClick={logoutUser}>LogOut</button> : null
            }
        </div>
    )
}

export default Home;