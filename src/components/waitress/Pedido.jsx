import { useState, createContext } from 'react';
import menudataJson from '../../menudata.json';

export const MenuContext = createContext(menudataJson);

export const Pedido = () => {
	return (
		<div className='flex flex-col justify-between items-center w-64 h-3/6 bg-indigo-400 bg-opacity-50 rounded-lg'>
			<div className='my-10'>
				<p>Mesero:Pepito</p>
				<div className='flex m-5'>
					<input type='button' value='+' />
					<p className='mx-3'>3</p>
					<input type='button' value='-' />
					<p className='mx-3'>Juguito de uwu</p>
					<input type='button' value='x' />
				</div>
				<div className='flex m-5'>
					<input type='button' value='+' />
					<p className='mx-3'>3</p>
					<input type='button' value='-' />
					<p className='mx-3'>Juguito de uwu</p>
					<input type='button' value='x' />
				</div>
				<div className='flex m-5'>
					<input type='button' value='+' />
					<p className='mx-3'>3</p>
					<input type='button' value='-' />
					<p className='mx-3'>Juguito de uwu</p>
					<input type='button' value='x' />
				</div>
			</div>
			<div className='flex'>
				<p>Total: $25.000</p>
			</div>
		</div>
	);
};

export default Pedido;
