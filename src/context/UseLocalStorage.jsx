// import { AppContext } from './Provider';
// import { useContext } from 'react';
// import { useState } from 'react';

// const UseLocalStorage = ( key , initialValue) => {
//     const context = useContext(AppContext);
//     const storedCart = context.cart;

//     const [storedValue, setStoredValue] = useState( () => {
//         try {
//             const item = window.localStorage.getItem('storedCart')
//             return item ? JSON.parse(item) : storedCart
//         } catch (error) {
//             return storedCart
//         }
//     });

//     const setValue = storedCart => {
//         try {
//             setStoredValue(storedCart) 
//             window.localStorage.setItem('storedCart', JSON.stringify(storedCart));
//         }
//         catch (error) {
//             console.error(error);         
//         }
//     }


// }
// export default UseLocalStorage;
