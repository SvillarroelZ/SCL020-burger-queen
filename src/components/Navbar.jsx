import {NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import Swal from 'sweetalert2';


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
    Swal.fire('Alerta de emergencia')
  }

  return (
        <div className='flex justify-center gap-20 shadow-xl text-white text-center'>

            {user &&
              <>         
                <button onClick={handleClickLogout} className='h-9 w-28 bg-purple-400 my-1 rounded-lg border-none shadow-xl border-white '>Logout</button>
                <button onClick={handlePanicBtn} className='h-9 w-28 bg-purple-400 my-1 rounded-lg border-none shadow-xl border-white'>Panic</button>
                <NavLink to='/tables' className='h-9 w-28 bg-purple-400 m-0 rounded-lg border-none shadow-xl border-white'>Tables</NavLink>
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
