import { createContext } from 'react';

export const AppContext = createContext();

const Provider = (props) => {
	const prueba = () => {
		console.log('zi');
	};

	const sum = { prueba };

	return (
		<>
			<AppContext.Provider value={sum}>
				{props.children}
			</AppContext.Provider>
		</>
	);
};
export default Provider;
