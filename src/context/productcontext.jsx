import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();
const API_URL = "https://api.pujakaitem.com/api/products";
const initialState = {
    isLoading : false,
    isError : false,
    products : [],
    featuredProducts : [],
    isSingleLoading : false,
    singleProduct : {},
};
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (API_URL) => {
        dispatch({type : "SET_LOADING"});
        try {
            const res = await axios.get(API_URL);
            const products = await res.data;
            dispatch({type : "SET_API_DATA", payload : products});
        } catch (error) {
            dispatch({type : "API_ERROR"});
        }
    }
    const getSingleProduct = async (API_URL) => {
        dispatch({type : "SET_SINGLE_LOADING"});
        try {
            const res = await axios.get(API_URL);
            const singleProduct = await res.data;
            dispatch({type : "SET_SINGLE_API_DATA", payload : singleProduct})
        } catch (error) {
            dispatch({type : "SINGLE_API_ERROR"});
        }
    }

    useEffect(() => {
        getProducts(API_URL);
    }, []);
    
    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
        {children}
        </AppContext.Provider>
    );
};

// custom hooks
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };