import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <NavLink to='/logout'>Logout</NavLink>
            <NavLink to='/panic'>Panic</NavLink>
            <NavLink to='/tables'>Tables</NavLink>
        </div>
    )
}
export default Navbar;