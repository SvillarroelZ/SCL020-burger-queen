import { createContext } from 'react';

export const AppContext = createContext();

const Provider = (props) => {
	
	const comanda = () => {
		console.log('peo');
		console.log(item.name);
		
	};

	const sum = { comanda };

	return (
		<>
			<AppContext.Provider value={sum}>
				{props.children}
				{/* <div>
					<p className='title-items'>{item.name}</p>
					<h2 className='mx-5'>${item.price}</h2>
				</div> */}
			</AppContext.Provider>
		</>
	);
};
export default Provider;
