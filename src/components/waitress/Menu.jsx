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
		<div>
			<div>
				<ul>
					<button onClick={() => menuHrs('day')}>sol</button>
					<button onClick={() => menuHrs('night')}>luna</button>
				</ul>
			</div>
			<div className='menuItems'>
				{Menu.map((item, index) => (
					<div key={index} className='itemCont'>
						<img src={item.img} alt='' />
						<p className='title-items'>${item.name}</p>
						<h2 className='price'>${item.price}</h2>
						<button
							onClick={() => context.addProduct(item)}
							className='btn-add'
						></button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Menu;
