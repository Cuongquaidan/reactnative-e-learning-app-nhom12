import { useContext, createContext, useState, useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import Constants from "expo-constants";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const { id } = useAuthContext();
    useEffect(() => {
        const getCartByAccountId = async () => {
            try {
                const response = await fetch(
                    `${Constants.expoConfig.extra.API_PREFIX}/carts/${id}`
                );
                if (!response.ok) {
                    throw new Error("Get data failed");
                }
                const data = await response.json();
                setCartItems(data);
            } catch (error) {
                console.log(error);
            }
        };
        getCartByAccountId();
    }, [id]);
    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartItems = () => useContext(CartContext);

export { CartProvider, useCartItems };
