import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
}

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}