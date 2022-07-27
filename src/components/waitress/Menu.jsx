import { useState, useContext } from 'react';
import { AppContext } from '../../context/Provider';

const Menu = ({ data }) => {
	const context = useContext(AppContext);
	const [Menu, setMenu] = useState([]);
	const menuType = (options) => {
		const drinkType = data.filter((elem) => elem.type === options);
		const foodType = data.filter((elem) => elem.type === options);
		const dessertType = data.filter((elem) => elem.type === options);

		if (drinkType === 'drink') {
			setMenu(drinkType);
		} else if (foodType === 'food') {
			setMenu(foodType);
		} else {
			setMenu(dessertType);
		}
	};

	return (
			<div className='flex flex-col justify-center items-center bg-white-300'>
				<div className='flex flex-col'>
					<div className='flex flex-row'>
						{/* <input id="displace" type="range" value="10" min="0" max="5" onInput="this.nextElementSibling.value = this.value"/> */}
						<ul className='flex items-center w-64 gap-1.5'>
							<button
								className='h-9 w-20 bg-purple-400 my-1 rounded-lg border-none shadow-xl border-white '
								onClick={() => menuType('drink')}
							>
								Bebidas
							</button>
							<button
								className='h-9 w-20 bg-purple-400 my-1 rounded-lg border-none shadow-xl border-white '
								onClick={() => menuType('food')}
							>
								Comida
							</button>
							<button
								className='h-9 w-20 bg-purple-400 my-1 rounded-lg border-none shadow-xl border-white '
								onClick={() => menuType('dessert')}
							>
								Postre
							</button>
						</ul>
					</div>
					<div className='w-14 h-3/6'>
						{Menu.map((item, index) => (
							<button
								onClick={() => (context(item.id, item.name, item.price))}
								key={index}
								className='my-3 flex flex-row bg-blue-400 rounded-lg'
							>
								<img src={item.img} alt='' />
								<p className='title-items'>{item.name}</p>
								<h2 className='mx-5'>${item.price}</h2>
							</button>
						))}
					</div>
				</div>
			</div>
	);
};

export default Menu;
