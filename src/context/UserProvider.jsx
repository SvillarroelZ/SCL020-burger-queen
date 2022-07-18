import { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase/init';
import { auth } from '../firebase/init';

export const UserContext = createContext();

const UserProvider = (props) => {

    const [user, setUser] = useState(true)

    // const registerUser =(email, password) => 
    //     createUserWithEmailAndPassword(auth, email, password);

    const loginUser = (email, password) => 
        signInWithEmailAndPassword(auth, email, password); 

    return (
        <UserContext.Provider value={{user, setUser, loginUser}}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;