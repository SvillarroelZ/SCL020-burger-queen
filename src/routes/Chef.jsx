import { UserContext } from '../context/UserProvider';
import { MenuContext } from '../components/waitress/Pedido';
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
			<div>
				<h3>Chef: Papitas</h3>
			</div>
			<Cronometro />
			<Comanda />
			<Botones />
		</>
	);
};

export default Chef;

// <h1>Chef</h1>
// <h2>{user ? 'Online' : 'Offline'}</h2>
// <button onClick={() => setUser(true)}>Access</button>
