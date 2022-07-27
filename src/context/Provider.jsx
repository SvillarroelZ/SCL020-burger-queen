import { createContext, useState } from 'react';
// import menudataJson from '../menudata.json';

export const AppContext = createContext();
const Provider = (props) => {
	// const data = menudataJson.menuOptions;
	
	// const [state, setState]= useState({ 
	// 	menuList: data,
	// 	cart: []
	// });
	
	
	const comanda = (id, name, price) => {
		
		// console.log(id);
		// console.log(name);
		// console.log(price)

		const idComanda = id
		const nameComanda = name
		const priceComanda = price
		//console.log(idComanda)

		
		const namePrice = idComanda === id ? `${nameComanda} ${priceComanda}` : null
		console.log(namePrice);

		// return (
		// 	<>
		// 		<p>${priceComanda}</p>
		// 		<p>${nameComanda}</p>
		// 		<p>${idComanda}</p>
		// 	</>
		// )

	};

			// const valores = {state, comanda} 

	return (
		<>
			<AppContext.Provider value={comanda}>
				{props.children}
			</AppContext.Provider>
		</>
	);
};
export default Provider;
