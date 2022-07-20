import menudataJson from '../menudata.json';
import Sizes from '../components/waitress/Sizes';
import Menu from '../components/waitress/Menu';
import Pedido from '../components/waitress/Pedido';

const Waitress = () => {
	const data = menudataJson.menuOptions;

	return (
		<>
			<Menu data={data} />
			<Sizes></Sizes>
			<Pedido></Pedido>
		</>
	);
};

export default Waitress;
