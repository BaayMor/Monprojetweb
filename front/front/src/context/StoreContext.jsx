import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    
    // Fonction pour ajouter un article au panier
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };
    
    // Fonction pour retirer un article du panier
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            
            // Si l'article existe et que la quantité est > 1, décrémente
            if (newCartItems[itemId] > 1) {
                newCartItems[itemId] -= 1;
            } else {
                // Si la quantité est 1 ou moins, supprime l'article du panier
                delete newCartItems[itemId];
            }
            
            return newCartItems;
        });
    };
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if(cartItems[itemId]>0){
                let itemInfo = food_list.find((product) => product._id === itemId);
                totalAmount += itemInfo.price * cartItems[itemId];
            }
        }
        return totalAmount;
    }
    // Fonction pour obtenir le nombre total d'articles dans le panier
    const getTotalCartItems = () => {
        return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
    };
    useEffect(() => {
        console.log("Cart Items Updated:", cartItems);
    }, [cartItems]);
    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartItems, 
        useEffect,
        getTotalCartAmount
    };
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
export { StoreContext };