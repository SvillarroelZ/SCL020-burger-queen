import { createContext, useState } from 'react';
import Swal from 'sweetalert2';
import menudataJson from '../menudata.json';
import axios from 'axios';

export const AppContext = createContext();

const Provider = (props) => {
    
    const data = menudataJson.menuOptions;

    const [cart, setCart]= useState([])
    // const [cartChef, setCartChef]= useState([]);
    
    const order = (product) => {
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
            Swal.fire("El producto ya está en la comanda");
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
                    return { ...inCart, count: inCart.amount - 1 }
                } else return productInCart
            });
        }
    };

    // const setValue = cart => {
    //     try {
    //         setCart(cart) 
    //         window.localStorage.setItem('storedCart', JSON.stringify(cart));
            
    //     }
    //     catch (error) {
    //         console.error(error);         

    //         }
    // }
    const bodyProductsDB = (info) =>{
        let arrayProduct = []
        for(let i = 0; i < info.length; i++){
    arrayProduct.push({
        qty: info[i].count,
        product: info[i].name,
        price: info[i].price  
    })
    }
    console.log(info);
    return arrayProduct
}
bodyProductsDB(cart);

    const handlePostOrder = (cart) => {
        // e.preventDefault();
        // console.log(bodyProductsDB(cart))
        // 
        let headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
                
        const body =   {client: "katqueen",
        products : bodyProductsDB(cart)
        }
        console.log(headers)
        axios
        .post('https://apiburgerqueenv1.herokuapp.com/orders',  body, { headers })  
        .then((response) => {
            console.log("orderrr---------->", response.data)
        }) 
        .catch((err) => console.log(err));
    } 



    const valores = {cart, order, data, increment, decrement, deleteProduct, bodyProductsDB, handlePostOrder} 
    

    return (
        <>
            <AppContext.Provider value={valores}>
                {props.children}
            </AppContext.Provider>
        </>
    );
};
export default Provider;


// [{
//     qty: 6,
//     product: bodyProductsDB,
//     price: 5000
//     },
//     {
//     qty: 1,
//     product: "patatas fritas",
//     price: 2000
//     }]