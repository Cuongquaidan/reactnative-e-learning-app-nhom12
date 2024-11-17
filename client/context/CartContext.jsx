import { useContext, createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartItems = () => useContext(CartContext);

export { CartProvider, useCartItems };
