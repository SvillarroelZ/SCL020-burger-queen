// import Navbar from "../components/Navbar"
import { useState, useContext } from "react"
// import {savePersonName, } from '../firebase/firestore'
import { UserContext } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Home = () => {
  const [email, setEmail] = useState('test@test.com')
  const [password, setPassword] = useState('123123')
  
  const { loginUser } = useContext(UserContext)
  const navegate = useNavigate()

 // const {register, handleSubmit, formState: {errors}} = useForm()
//  const onSubmit = (data) => console.log(data)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('procesando form:', email, password)
    try {
      await loginUser(email, password)
      console.log('user is loged in')
      //navegate('/chef')
      Swal.fire({text: 'Are you a chef or a waitress?', 
              icon: 'question', 
              showCancelButton: true, 
              confirmButtonText: 'Chef', 
              cancelButtonText: 'Waitress',
              backdrop: true,
              confirmButtonColor: '#8E87FF',
              cancelButtonColor: '#8E87FF',
          })
              .then(async (result) => {
                if (result.value) {
                  navegate('/chef')
                } else {
                  navegate('/waitress')
                }
              })
    } catch (error) {
      //error.code("Auth Error, try again")
      Swal.fire(error.code)
    }
  };

  return (
        <>
            <h1>Register</h1>
            <form onSubmit = {handleSubmit}>
                <input type="email" placeholder='email' required='on' value={email} onChange={e => setEmail(e.target.value)}
                />
                <input type="password" 
                placeholder='password' 
                required='on'
                value={password} 
                onChange={e => setPassword(e.target.value)}
                
                />
            <button type='submit'>Login</button>
            </form>
        </>
  )
};

export default Home
