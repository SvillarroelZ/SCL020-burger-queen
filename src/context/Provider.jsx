import { createContext, useState } from 'react';
import Swal from 'sweetalert2';
import menudataJson from '../menudata.json';
import { useEffect } from 'react';

export const AppContext = createContext();

const Provider = (props) => {
	const data = menudataJson.menuOptions;

	const [cart, setCart] = useState([]);
	// const [cartChef, setCartChef]= useState([]);

	const comanda = (product) => {
		// console.log(product)

		const searchProduct = cart.findIndex((item) => item.id === product.id);
		// console.log(searchProduct)
		if (searchProduct == -1) {
			const productList = [
				...cart,
				{
					id: product.id,
					name: product.name,
					price: product.price,
					count: 1,
					totalPrice: product.price,
				},
			];
			// console.log(productList)
			setCart(productList);
		} else {
			Swal.fire('El producto ya está en la comanda');
		}
	};

	const increment = (product) => {
		const newCart = [...cart];
		const searchProduct = cart.findIndex((item) => item.id === product.id);

		newCart[searchProduct].count += 1;
		newCart[searchProduct].totalPrice =
			newCart[searchProduct].count * newCart[searchProduct].price;

		setCart(newCart);
	};

	const decrement = (product) => {
		const newCart = [...cart];
		const searchProduct = cart.findIndex((item) => item.id === product.id);

		if (newCart[searchProduct].count >= 2) {
			newCart[searchProduct].count -= 1;
		}

		newCart[searchProduct].totalPrice =
			newCart[searchProduct].count * newCart[searchProduct].price;

		setCart(newCart);
	};

	const deleteProduct = (product) => {
		const inCart = cart.find(
			(productInCart) => productInCart.id === product.id
		);

		if (inCart.count >= 1) {
			setCart(
				cart.filter((productInCart) => productInCart.id !== product.id)
			);
		} else {
			setCart((productInCart) => {
				if (productInCart.id === product.id) {
					return { ...inCart, count: inCart.amount - 1 };
				} else return productInCart;
			});
		}
	};

	// useEffect(() => {
	// 	console.log('cart', cart);
	// 	window.localStorage.setItem('cart', JSON.stringify(cart));
	// }, [cart]);

	// console.log(cart);
	// const sendCart = () => {
	// 	setCart({
	// 		...cart,
	// 		cart: [],
	// 	});

	// 	localStorage.setItem('cart', cart);
	// 	let trae = localStorage.getItem('cart');
	// 	console.log(trae);
	// };

	const valores = {
		cart,
		comanda,
		data,
		increment,
		decrement,
		deleteProduct,
	};

	return (
		<>
			<AppContext.Provider value={valores}>
				{props.children}
			</AppContext.Provider>
		</>
	);
};
export default Provider;
