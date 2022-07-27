// import Navbar from "../components/Navbar"
import { useState, useContext } from 'react';
// import {savePersonName, } from '../firebase/firestore'
//import { UserContext } from '../context/UserProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import axios from 'axios';
//import popUp from '../utils/popUp';
//import { useForm } from 'react-hook-form';

const Home = () => {
	const [email, setEmail] = useState('chef@katqueen.com');
	const [password, setPassword] = useState('123123');
	const navegate = useNavigate();
	const [user, setUser] = useState({
		email: email,
		password: password,
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setUser({ ...user, email, password });
		console.log(user);
		axios
			.post('https://apiburgerqueenv1.herokuapp.com/auth', {
				email: user.email,
				password: user.password,
			})
			.then((response) => {
				console.log(response.data);
				localStorage.setItem('token', response.data.token);
				//console.log(localStorage.getItem('token'));
				response = Swal.fire({
					text: 'Are you a chef or a waitress?',
					icon: 'question',
					showCancelButton: true,
					confirmButtonText: 'Chef',
					cancelButtonText: 'Waitress',
					backdrop: true,
					confirmButtonColor: '#8E87FF',
					cancelButtonColor: '#8E87FF',
				}).then((result) => {
					if (result.value) {
						navegate('/chef');
					} else {
						navegate('/waitress');
					}
				});
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='flex flex-col justify-center items-center w-screen h-screen bg-purple-300'>
			<div className='flex justify-center items-center h-3/4 w-2/4 border-8 border-double border-white'>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col items-center'
				>
					<img
						src='src\components\images\logo-title.png'
						alt='logo-katQueen'
						className='h-60 mb-6'
					/>
					<input
						className='my-1 rounded-lg border-none shadow-xl text-gray-400 text-center'
						type='email'
						placeholder='email'
						required='on'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className='my-1 rounded-lg border-none shadow-xl text-gray-400 text-center'
						type='password'
						placeholder='password'
						required='on'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						type='submit'
						className='h-9 w-28 bg-white my-1 rounded-lg border-none shadow-xl'
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Home;
