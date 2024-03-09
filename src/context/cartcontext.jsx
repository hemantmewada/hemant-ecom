import React, {useContext, createContext, useReducer, useEffect} from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();
const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cart_data");
    // if (localCartData == [] || localCartData == '[]') {
    //     return [];
    // } else {
    //     return JSON.parse(localCartData);
    // }
    const parsedData = JSON.parse(localCartData);
    if (!Array.isArray(parsedData)) {
        return [];
    }
    return parsedData;
}
const initialState = {
    // cart : [],
    cart : getLocalCartData(),
    total_item : 0,
    total_amount : 0,
    shipping_fee : 50000,
}
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type : "ADD_TO_CART", payload : { id, color, amount, product } })
    }
    useEffect(() => {
        // dispatch({ type : "TOTAL_ITEM" });
        // dispatch({ type : "CART_TOTAL" });
        dispatch({ type : "CART_CALCULATION" });
        if (state.cart == []) {
            localStorage.setItem("cart_data","[]");
        } else {
            localStorage.setItem("cart_data",JSON.stringify(state.cart));
        }
    }, [state.cart]);
    
    const clearCart = () => {
        dispatch({ type : "CLEAR_CART" });
    }

    const setIncrease = (id) => {
        dispatch({ type : "INCREASE", payload : id });
    }
    
    const setDecrease = (id) => {
        dispatch({ type : "DECREASE", payload : id });
    }

    const removeItem = (id) => {
        dispatch({ type : "REMOVE_ITEM_FROM_CART", payload : id })
    }

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setIncrease, setDecrease }}>
            {children}
        </CartContext.Provider>
    );
}

const useCartContext = () => {
    return useContext(CartContext);
}
export { CartContext, CartProvider, useCartContext };