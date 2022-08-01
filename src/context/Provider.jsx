import { createContext, useState } from 'react';
import menudataJson from '../menudata.json';

export const AppContext = createContext();

const Provider = (props) => {
	
	const data = menudataJson.menuOptions;

	const [cart, setCart]= useState([])
	// const [cartChef, setCartChef]= useState([]);

	
	const comanda = (product) => {
		// console.log(product)
		
		const searchProduct = cart.findIndex(item => item.id === product.id);
		// console.log(searchProduct)
		if(searchProduct == -1) {
			const productList = 
			[...cart, {
				id: product.id,
				name: product.name,
				price: product.price,
				count: 1,
				totalPrice: product.price
			}]
			// console.log(productList)
			setCart(productList)
		} 
		else {
			console.log("Error")
		}
	};

	const increment = (product) => {
		const newCart = [...cart]
		const searchProduct = cart.findIndex(item => item.id === product.id);

		newCart[searchProduct].count += 1;
		newCart[searchProduct].totalPrice =  newCart[searchProduct].count * newCart[searchProduct].price;

		setCart(newCart)
	}	

	const decrement = (product) => {
		const newCart = [...cart]
		const searchProduct = cart.findIndex(item => item.id === product.id);

	
		if(newCart[searchProduct].count >= 2){
			newCart[searchProduct].count -= 1;
		}


		newCart[searchProduct].totalPrice =  newCart[searchProduct].count * newCart[searchProduct].price;

		setCart(newCart)
	}	

	const deleteProduct= (product) => {
		const newCart= [...cart]
		let searchProduct = cart.findIndex(item => item.id === product.id);

		if(newCart[searchProduct].count) {
			newCart[searchProduct].count = 0;
		}

	// 	if (searchProduct) {
	// 		return { ...cart, count: cart.count - 1 }
	// 	} else return console.log("oa no se restar")
	// }
	}


	
	const valores = {cart, comanda, data, increment, decrement, deleteProduct} 

	return (
		<>
			<AppContext.Provider value={valores}>
				{props.children}
			</AppContext.Provider>
		</>
	);
};
export default Provider;