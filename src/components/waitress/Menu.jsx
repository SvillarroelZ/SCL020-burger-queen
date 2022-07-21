import ReactDOM from 'react-dom/client';
import { useState, useContext } from 'react';
import { MenuContext } from './Pedido';

const Menu = ({ data }) => {

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
		<div className='flex flex-col justify-center items-center bg-white-300'>
			<div className='flex flex-col'>
				<div className='flex flex-row' >
					{/* <input id="displace" type="range" value="10" min="0" max="5" onInput="this.nextElementSibling.value = this.value"/> */}
					<ul className='flex items-center w-24'>
						<button className='rounded-l-2xl bg-indigo-500' onClick={() => menuHrs('day')}>&#x1F31E;</button>
						<button className='rounded-r-2xl bg-yellow-400' onClick={() => menuHrs('night')}>&#127769;</button>
					</ul>
				</div>
				<div className='w-64 h-3/6' >
					<div className='menuItem'>
							{Menu.map((item, index) => (
								<div key={index} className='itemCont flex flex-row bg-blue-400 rounded-lg'>
									<img src={item.img} alt='' />
									<p className='title-items'>{item.name}</p>
									<h2 className='price'>${item.price}</h2>
									{/* <button
										onClick={() => context.addProduct(item)}
										className='btn-add'
									></button> */}
								</div>
							))}
					</div>
				</div>
			</div>	
		</div>
	);
};

export default Menu;