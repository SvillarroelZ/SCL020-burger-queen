import { useState, createContext } from "react";
import menudataJson from'../../menudata.json';
import Menu from "./Menu";


export const MenuContext = createContext(menudataJson);

export const WaitressHome = () => {
    const data = menudataJson.menuOptions;
    const [state, setState] = useState({
        menuList: data,
        cart: []
    });



}

