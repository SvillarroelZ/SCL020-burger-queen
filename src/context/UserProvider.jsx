
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from '../firebase/init';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/init';

export const UserContext = createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            console.log(user)
            if(user){
                const {email, displayName, uid} = user;
                setUser({email, displayName, uid});
            }else{
                setUser(null);
            }
        })
        return () => unsubscribe()
    }, [])

    const registerUser =(email, password) => 
        createUserWithEmailAndPassword(auth, email, password);

    const loginUser = (email, password) => 
        signInWithEmailAndPassword(auth, email, password); 

    const signOutUser = () => signOut(auth)    

    return (
        <UserContext.Provider value={{user, setUser, registerUser, loginUser, signOutUser}}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;