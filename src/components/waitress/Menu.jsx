import { useState, useContext } from 'react';
import { AppContext } from '../../context/Provider';

const Menu = () => {
	const context = useContext(AppContext);
	const [Menu, setMenu] = useState([]);
	const menuType = (options) => {
		const drinkType = context.data.filter((elem) => elem.type === options);
		const foodType = context.data.filter((elem) => elem.type === options);
		const dessertType = context.data.filter(
			(elem) => elem.type === options
		);

		if (drinkType === 'drink') {
			setMenu(drinkType);
		} else if (foodType === 'food') {
			setMenu(foodType);
		} else {
			setMenu(dessertType);
		}
	};

	//const itemComanda = data.find(item => item.id == id)
	return (
		<div className='flex flex-col justify-between items-center bg-white-300 h-96'>
			<div>
				<div>
					{/* <input id="displace" type="range" value="10" min="0" max="5" onInput="this.nextElementSibling.value = this.value"/> */}
					<ul className='flex items-center w-64  gap-1.5 '>
						<button
							className='h-9 w-20 bg-purple-400 my-1 text-white rounded-lg border-none shadow-xl border-white '
							onClick={() => menuType('drink')}
						>
							Bebidas
						</button>
						<button
							className='h-9 w-20 bg-purple-400 my-1 text-white rounded-lg border-none shadow-xl border-white '
							onClick={() => menuType('food')}
						>
							Comida
						</button>
						<button
							className='h-9 w-20 bg-purple-400 my-1 text-white rounded-lg border-none shadow-xl border-white '
							onClick={() => menuType('dessert')}
						>
							Postre
						</button>
					</ul>
				</div>
				<div className='w-64 h-84'>
					{Menu.map((item, id) => (
						<button
							onClick={() => context.comanda(item)}
							key={id}
							className='my-3 p-5 w-56 h-20 flex flex-row justify-center align-middle mr-12 rounded-lg'
						>
							<img
								className='w-1/3'
								src={item.img}
								alt='food-img'
							/>
							<p className='title-items w-1/3 justify-center align-middle m-2 '>
								{item.name}
							</p>
							<h2 className='w-1/3 justify-end align-middle p-5 text-indigo-900'>
								${item.price}
							</h2>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Menu;
