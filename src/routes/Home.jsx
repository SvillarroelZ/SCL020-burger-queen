import Navbar from "../components/Navbar"
import { useState } from "react"
import {savePersonName} from '../firebase/firestore'

const Home = () => {
    const [personName, setPersonName] = useState(null)
    const savePerson = () => {
        savePersonName(personName)
        
    }
    return(
        <>
            
            <h1>Home</h1>
            <input type="text" onChange={e => setPersonName(e.target.value)} />
            <button onClick={savePerson}>Save</button>
            
        </>
    )
}

export default Home;