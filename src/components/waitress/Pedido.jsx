import { useContext } from 'react';
import { AppContext } from '../../context/Provider';
import { useNavigate } from 'react-router-dom';
import { FaPlusCircle, FaTrashAlt, FaMinusCircle } from 'react-icons/fa';

//cart
export const Pedido = () => {
	// const [cart, setCart]= useState(context.cart);
	const context = useContext(AppContext);

	// newCart[searchProduct].count += 1;
	// newCart[searchProduct].totalPrice =  newCart[searchProduct].count * newCart[searchProduct].price;

	const cartProduct = context.cart;

	const totalPrice = () => {
		let newPrice = 0;
		cartProduct.map((item) => {
			newPrice += item.count * item.price;
		});
		return newPrice;
	};

	// console.log(totalPrice) max-h-96;

	return (
		<div className='flex flex-col justify-center items-center '>
			<div className='flex flex-col items-start bg-indigo-300 p-5 mx-12 w-58 max-h-96 rounded-lg overflow-x-hidden '>
				{cartProduct.map((item, id) => (
					<div key={id}>
						<div className='flex '>
							<div className='flex w-26'>
								{/* {console.log(item)} */}
								<button
									onClick={() => context.decrement(item)}
									className='w-1'
								>
									<FaMinusCircle />
								</button>
								<p className='mx-5 my-5'>{item.count}</p>
								<button
									onClick={() => context.increment(item)}
									className='w-1'
								>
									<FaPlusCircle />
								</button>
								<p className='mx-5 my-5'>{item.name}</p>
								<button
									className='flex items-center justify-end '
									onClick={() => context.deleteProduct(item)}
								>
									<FaTrashAlt />
								</button>
							</div>
						</div>
					</div>
				))}

				{/* <button onClick={() => context.sendCart()}>Enviar Comanda</button> */}
			</div>
			<p>Precio total: ${totalPrice()}</p>
			<button
				className='bg-indigo-300 w-40 h-12 rounded-lg border-2 border-white shadow-xl'
				onClick={() => context.sendCart()}
			>
				Enviar Comanda
			</button>
		</div>
	);
};

export default Pedido;

// class="fi fi-br-minus-small"

// const totalCart = carritoProductos.reduce((total, producto) =>
// (total = total + producto.price * producto.count), 0 )

// const totalCount = context.state.cart.reduce((total, producto) =>
// (total = total + producto.count), 0)

// const [ waiter, setWaiter ] = useState(''); //*
// const [ table, setTable ] = useState('');

// const getDate = () => {
//  const currentDate = new Date();
//  const date = `${currentDate.getDate()} - ${(currentDate.getMonth() + 1)} - ${currentDate.getFullYear()}`;
//  const time = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
//  const dateTime = `${date} - ${time}`;
//  return dateTime;
// }

// const addData = async (e) => {
//  e.preventDefault();
//  try {
//      const doc = await addDoc(collection, (db, 'pedidos'), {
//          name: waiter || null,
//          table: table || null,
//          order: carritoProductos || null,
//          total: totalCart || null,
//          time: getDate(),
//          status:'pending'
//      });
//      console.log('Documento agregado por id: ', docRef.id);
//  } catch (error) {
//      console.log('Error añadiendo documento: ', error);
//  }
//  setWaiter('');
//  setTable('');
//  context.removeAll();
// }
//  const hidden = () => {
//      alert('Pedido realizado con éxito');
//  }
