import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { MenuContext } from '../components/waitress/Pedido';
import Cronometro from '../components/Chef/Cronometro';
import Comanda from '../components/Chef/Comanda';
import Botones from '../components/Chef/Botones';



const Chef = () => {
	const { user, setUser } = useContext(UserContext);
	return (
		<>
			<div>
				<h3>Chef: Papitas</h3>
			</div>
			<Cronometro/>
			<Comanda/>
			<Botones/>
		</>
	);
};

export default Chef;

// <h1>Chef</h1>
// <h2>{user ? 'Online' : 'Offline'}</h2>
// <button onClick={() => setUser(true)}>Access</button>
