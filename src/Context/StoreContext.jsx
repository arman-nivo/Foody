import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) =>{
    const [cartItems, setcartItem] = useState({});

    const addTocart = (itemId) =>{
        if (!cartItems[itemId]){
            setcartItem((prev) => ({...prev ,[itemId]: 1}));
        }
        else{
            setcartItem((prev) => ({...prev ,[itemId]:prev[itemId]+1}));
        }
       
    }
    const removeItem = (itemId) =>{
        setcartItem((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue = {
        food_list,
        addTocart,
        removeItem,
        cartItems, 
        setcartItem

    }

    return(
        <StoreContext.Provider value ={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
 
export default StoreContextProvider;