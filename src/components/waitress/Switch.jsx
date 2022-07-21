import ReactDOM from 'react-dom/client';
import { useState, useContext } from 'react';
import { MenuContext } from './Pedido';

const Switch = ({ data }) => {
	const context = useContext(MenuContext);
	const [Menu, setMenu] = useState([]);

	const menuHrs = (options) => {
		const dayOp = data.filter((elem) => elem.menu === options);
		console.log('si funciona');
		setMenu(dayOp);

		const nightOp = data.filter((elem) => elem.menu === options);
		setMenu(nightOp);

		options === 'day' ? dayOp : nightOp;
	};

	return (
		<div className='flex flex-col justify-center items-center w-screen h-screen bg-purple-300'>
			<div className='flex flex-row-reverse'>
				<ul className='flex items-center border border-red-700 w-24'>
					<button className='rounded-l-2xl bg-indigo-500' onClick={() => menuHrs('day')}>&#x1F31E;</button>
					<button className='rounded-r-2xl bg-yellow-400' onClick={() => menuHrs('night')}>&#127769;</button>
				</ul>
			</div>
		</div>
	);
};
export default Switch;