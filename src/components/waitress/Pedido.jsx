import { useState, createContext } from 'react';
import menudataJson from '../../menudata.json';

export const MenuContext = createContext(menudataJson);

export const Pedido = () => {
	return (
		<div>
			<div>
				<div>
					<input type='button' value='+' />
					<p>3</p>
					<input type='button' value='-' />
					<p>Juguito de uwu</p>
					<input type='button' value='x' />
				</div>
				<div>
					<input type='button' value='+' />
					<p>3</p>
					<input type='button' value='-' />
					<p>Juguito de uwu</p>
					<input type='button' value='x' />
				</div>
				<div>
					<input type='button' value='+' />
					<p>3</p>
					<input type='button' value='-' />
					<p>Juguito de uwu</p>
					<input type='button' value='x' />
				</div>
			</div>
			<div>
				<p>Mesero:Pepito</p>
				<p>Total: $25.000</p>
			</div>
		</div>
	);
};

export default Pedido;
