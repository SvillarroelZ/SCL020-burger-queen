import { createContext, useState } from 'react';
import menudataJson from '../menudata.json';

export const AppContext = createContext();

const Provider = (props) => {
	
	const data = menudataJson.menuOptions;

	const [cart, setCart]= useState([]);
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
			const newCart = [...cart]

			newCart[searchProduct].count += 1;
			newCart[searchProduct].totalPrice =  newCart[searchProduct].count * newCart[searchProduct].price;
			setCart(newCart)
		}
	};



	
	const valores = {cart, comanda, data} 

	return (
		<>
			<AppContext.Provider value={valores}>
				{props.children}
			</AppContext.Provider>
		</>
	);
};
export default Provider;






		// setState({
		// 		...state,

		// 		cart: state.cart.find((elem) => elem.id === product.id)
		// 		? 
		// 		state.cart.push(product.name, product.price) : console.log("no funcion :c")
		// })

		// console.log(id);
		// console.log(name);
		// console.log(price)

		// const idComanda = id
		// const nameComanda = name
		// const priceComanda = price
		//
		// const itemComanda = data.find(item => item.id == id)
		// //console.log(itemComanda)

		// const newCart = state.cart.push(name, price)
		// console.log(newCart)

		//const namePrice = idComanda === id ? `${nameComanda} ${priceComanda}` : null
		//console.log(namePrice);

		// return (
		// 	<>
		// 		<p>${priceComanda}</p>
		// 		<p>${nameComanda}</p>
		// 		<p>${idComanda}</p>
		// 	</>
		// )
