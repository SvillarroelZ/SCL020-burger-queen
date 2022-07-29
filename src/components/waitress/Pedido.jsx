import { useContext } from 'react';
import { AppContext } from '../../context/Provider';
import { useNavigate } from 'react-router-dom';

//cart
export const Pedido = () => {

	const context = useContext(AppContext);
	// const navegate = useNavigate();

	

	const cartProduct = context.cart;

	console.log(cartProduct);

	// const sendCart = () => {
	// 	navegate('/chef');
	// }
	
	
	return (
		<div className="flex flex-col items-start bg-indigo-300 p-5 mx-12 rounded-lg">
			{cartProduct.map((item, index) => (
				<div key={index} className="flex w-56" >
					<p className="mx-5">{item.count}</p>				
					<p>{item.name}</p>
				</div>
			))}
			{/* <button onClick={sendCart} >Enviar Comanda</button> */}
		</div>	
	
	)
}

export default Pedido;










	// const totalCart = carritoProductos.reduce((total, producto) => 
	// (total = total + producto.price * producto.count), 0 )

	// const totalCount = context.state.cart.reduce((total, producto) =>
	// (total = total + producto.count), 0)

	// const [ waiter, setWaiter ] = useState(''); //*
	// const [ table, setTable ] = useState('');
	

	// const getDate = () => {
	// 	const currentDate = new Date();
	// 	const date = `${currentDate.getDate()} - ${(currentDate.getMonth() + 1)} - ${currentDate.getFullYear()}`;
	// 	const time = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
	// 	const dateTime = `${date} - ${time}`;
	// 	return dateTime;
	// }
	
	// const addData = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const doc = await addDoc(collection, (db, 'pedidos'), {
	// 			name: waiter || null,
	// 			table: table || null,
	// 			order: carritoProductos || null,
	// 			total: totalCart || null,
	// 			time: getDate(),
	// 			status:'pending'
	// 		});
	// 		console.log('Documento agregado por id: ', docRef.id);
	// 	} catch (error) {
	// 		console.log('Error añadiendo documento: ', error);
	// 	}
	// 	setWaiter('');
	// 	setTable('');
	// 	context.removeAll();
	// }
	// 	const hidden = () => {
	// 		alert('Pedido realizado con éxito');
	// 	}	