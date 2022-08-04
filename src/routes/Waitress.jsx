import menudataJson from '../menudata.json';
import Sizes from '../components/waitress/Sizes';
import Menu from '../components/waitress/Menu';
import Pedido from '../components/waitress/Pedido';
import axios from 'axios';

// import Switch from '../components/waitress/switch';

const Waitress = () => {
	const data = menudataJson.menuOptions;

	return (
		<main className='flex justify-center items-start w-screen h-screen m'>
			<div className='flex justify-around items-center  max-w-5xl'>
				<div className='flex justify-start items-center flex-col text-purple-900'>
					<Menu data={data} />
					<Sizes />
				</div>
				<div className='flex flex-col justify-center items-center w-fit h-fit text-indigo-900'>
					<Pedido />
				</div>
			</div>
		</main>
	);
};

export default Waitress;
