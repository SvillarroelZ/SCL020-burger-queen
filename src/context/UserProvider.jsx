import { createContext } from "react";

export const UserContext = createContext();

const UserProvider = () => {

    return (
        <UserContext.Provider>
            {props.children}
        </UserContext.Provider>
    )
};

export default UserProvider;