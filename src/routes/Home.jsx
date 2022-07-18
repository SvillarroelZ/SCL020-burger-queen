// import Navbar from "../components/Navbar"
import { useState, useContext } from "react"
// import {savePersonName, } from '../firebase/firestore'
import { UserContext } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    
    const [email, setEmail] = useState('test@test.com')
    const [password, setPassword] = useState('123123')
    
    const {loginUser} = useContext(UserContext);
    const navegate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log('procesando form:', email, password);
        try{
            await loginUser(email, password);
            console.log('user is loged in');
            navegate('/chef')
        } catch (error) {
            console.log(error.code);
            
        }
    };

    return (
        <>
            <h1>Register</h1>
            <form onSubmit = {handleSubmit}>
                <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <button type='submit'>Login</button>
            </form>
        </>
    );
}

export default Home;