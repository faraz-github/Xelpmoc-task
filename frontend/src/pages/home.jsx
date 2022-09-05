import { useUser } from "../contexts/userContext";

function Home() {

    const { user, setUser } = useUser();

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