import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { food_list } from '../assets/food/assets/frontend_assets/assets'

export const StoreContext = createContext(null)



const StoreContextProvider = (props) =>{

    const [cartItem, setCartItem] = useState({})

    
        const addTocart = (itemId) => {
            setCartItem(prev => ({
                ...prev,
                [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
            }));
        };
    
        const removeFromCart = (itemId) => {
            if (cartItem[itemId] > 1) {
                setCartItem(prev => ({
                    ...prev,
                    [itemId]: prev[itemId] - 1
                }));
            } else {
                const updatedCart = { ...cartItem };
                delete updatedCart[itemId];
                setCartItem(updatedCart);
            }
        };
        useEffect (()=>{
                console.log(cartItem)
        },[cartItem])

    const contextValue ={
        food_list,
        cartItem,
        setCartItem,
        addTocart,
        removeFromCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
                {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider