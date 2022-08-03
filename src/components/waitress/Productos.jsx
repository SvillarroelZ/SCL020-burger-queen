import { useState } from 'react';
//import { createContext } from 'react';
import menudataJson from '../../menudata.json';
//import { Pedido } from './Pedido';


const Productos = (props) => {
    //console.log(props)

    //const context = useContext(MenuContext);
    // const data = useContext();
    const data = menudataJson.menuOptions;
    // const context = useContext(MenuContext)


//     const [comanda, setComanda] = useState({ //este es su state/setState de Order
// 		menuList: data,
// 		carrito: []
// 	});
 }

// 	const agregar = (producto) => {
// 		return setComanda({
// 			...comanda,

// 			carrito: comanda.carrito.find((carritoProduct) => carritoProduct.id === producto.id)
// 			? comanda.carrito.map((carritoProduct) => carritoProduct.id === producto.id
// 			? {...carritoProduct, count: carritoProduct.count +1} : carritoProduct)

// 			: [...comanda.carrito, {...producto, count: 1}]
// 		});
// 	}

//     return (
//         props.products.map((item, index) => (
//             <>
//                 <button onClick={() => agregar(item)} key={index} className='my-3 flex flex-row bg-blue-400 rounded-lg'>
//                 <img src={item.img} alt='' />
//                 <p className='title-items'>{item.name}</p>
//                 <h2 className='mx-5'>${item.price}</h2>
//             </button>
//             <Pedido />
//             </>
//         ))
//     )
// }
// export default Productos;
