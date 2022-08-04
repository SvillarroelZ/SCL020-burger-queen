import { UserContext } from '../context/UserProvider';
// import { MenuContext } from '../components/waitress/Pedido';
import Cronometro from '../components/Chef/Cronometro';
import Comanda from '../components/Chef/Comanda';
import Botones from '../components/Chef/Botones';
import axios from 'axios';
import { useEffect } from 'react';

const Chef = () => {
	//const { user, setUser } = useContext(UserContext);

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

	return (
		<>
			<div className='w-screen h-screen'>
				<div className='w-1/3'>
					<h3 className='text-2xl'>Chef: Juan Hernandez</h3>
					<div className='flex flex-col items-start bg-indigo-300 rounded-lg'>
						<Cronometro />
						<Comanda />
						<Botones />
					</div>
				</div>
			</div>
		</>
	);
};

export default Chef;

// <h1>Chef</h1>
// <h2>{user ? 'Online' : 'Offline'}</h2>
// <button onClick={() => setUser(true)}>Access</button>
