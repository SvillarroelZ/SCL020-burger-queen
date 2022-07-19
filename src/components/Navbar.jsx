import {NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';


const Navbar = () => {
  //const navegate = useNavigate()
  const { user, signOutUser } = useContext(UserContext)
  const handleClickLogout = async () => {
    try {
      await signOutUser()
    } catch (error) {
      console.log(error.code)
    }
  }

  const handlePanicBtn = () => {
    alert('Alerta de emergencia')
  }

  return (
        <div>

            {user &&
              <>         
                <button onClick={handleClickLogout}>Logout</button>
                <button onClick={handlePanicBtn}>Panic</button>
                <NavLink to='/tables'>Tables</NavLink>
              </> 
            }




            {/* {user
              ? (
                <>
                    <button onClick={handleClickLogout}>Logout</button>
                    <button onClick={handlePanicBtn}>Panic</button>
                    <NavLink to='/tables'>Tables</NavLink>
                </>
                )
              : (
                <>

                </>
                )} */}

        </div>
  )
}
export default Navbar
