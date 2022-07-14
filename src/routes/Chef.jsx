import {useContext} from 'react'
import { UserContext } from '../context/UserProvider'

const Chef = () => {
    const {user, setUser} = useContext(UserContext)
    return(
        <>
            <h1>Chef</h1>
            <h2>{user ? 'Online' : 'Offline'}</h2>
            <button onClick={() => setUser(true)}>Access</button>
        </>
    )
}

export default Chef