import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useEffect } from 'react';

const Navbar = () => {
	const navegate = useNavigate();
	const { user, signOutUser } = useContext(UserContext);
	const handleClickLogout = () => {
		localStorage.removeItem('token');
		navegate('/');
	};
	useEffect(() => {
		let headers = {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		};
		axios
			.get('https://apiburgerqueenv1.herokuapp.com/', { headers })
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handlePanicBtn = () => {
		Swal.fire({
			tittle: '¿Deseas llamar al administrador?',
			html: '¿Deseas llamar al administrador?',
			icon: 'question',
			showCancelButton: false,
			showConfirmButton: true,
			showCloseButton: true,
			confirmButtonText: 'Si, Ayuda!',
		});
	};

	const tables = () => {
		navegate('/tables');
	};

	return (
		<div className='flex justify-center gap-20 shadow-xl text-white text-center'>
			{user && (
				<>
					<button
						onClick={handleClickLogout}
						className='h-9 w-28 bg-purple-400 my-1 rounded-lg border-none shadow-xl border-white '
					>
						Logout
					</button>
					<button
						onClick={handlePanicBtn}
						className='h-9 w-28 bg-purple-400 my-1 rounded-lg border-none shadow-xl border-white'
					>
						Panic
					</button>
					<button
						onClick={tables}
						className='h-9 w-28 bg-purple-400 m-1 rounded-lg border-none shadow-xl border-white'
					>
						Tables
					</button>
				</>
			)}
		</div>
	);
};
export default Navbar;
