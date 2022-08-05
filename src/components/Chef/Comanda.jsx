import { useContext } from 'react';
import { AppContext } from '../../context/Provider';

const Order = () => {
    // const context = useContext(AppContext);

    // const cartChef = context.cart;

    const getValue = window.localStorage.getItem('storedCart');
    const getParse = JSON.parse(getValue);
    console.log(getParse);





    return (
    <>
        <div className="flex flex-col items-start bg-indigo-300 p-5 mx-12 rounded-lg">
			{getParse.map((item, index) => (
				<div key={index} className="flex w-56">
					<p className="mx-5">{item.count}</p>				
					<p>{item.name}</p>
				</div>
			))}
		</div>	
    </>
    )
}

export default Order;