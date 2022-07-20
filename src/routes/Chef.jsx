import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { MenuContext } from '../components/waitress/Pedido';

const Chef = () => {
	const { user, setUser } = useContext(UserContext);
	return (
		<>
			<div>
				<h3>Chef: Papitas</h3>
			</div>
			<div>
				<div className='command-chef-1'>
					<div className='hour-chef'>00:00</div>
					<div>
						<p>Mesa N°5</p>
						<p> 3 Juguito de uwu M</p>
						<p> 1 Juguito de uwu L</p>
						<p> 6 Juguito de uwu S</p>
						<p> Mesero: Pepito</p>
					</div>
					<button>Aceptar Pedido</button>

					<button>Pedido Terminado</button>
				</div>
				<div className='command-chef-2'>
					<div className='hour-chef'>05:00</div>
					<div>
						<p>Mesa N°5</p>
						<p> 2 Juguito de uwu M</p>
						<p> 5 Juguito de uwu L</p>
						<p> 2 Juguito de uwu S</p>
						<p> Mesero: Pepito</p>
					</div>
					<button>Aceptar Pedido</button>
					<button>Pedido Terminado</button>
				</div>
				<div className='command-chef-3'>
					<div className='hour-chef'>15:06</div>
					<div>
						<p>Mesa N°5</p>
						<p> 1 Juguito de uwu M</p>
						<p> 5 Juguito de uwu L</p>
						<p> 4 Juguito de uwu S</p>
						<p> Mesero: Pepito</p>
					</div>
					<button>Aceptar Pedido</button>
					<button>Pedido Terminado</button>
				</div>
			</div>
		</>
	);
};

export default Chef;

// <h1>Chef</h1>
// <h2>{user ? 'Online' : 'Offline'}</h2>
// <button onClick={() => setUser(true)}>Access</button>
