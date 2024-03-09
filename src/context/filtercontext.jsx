import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";
const FilterContext = createContext();
const initialState = {
    filter_products : [],
    all_products : [],
    grid_view : true,
    sorting_value : "lowest",
    filters : {
        text : "",
        category : "all",
        company : "all",
        colors : "all",
        maxPrice : 0,
        price : 0,
        minPrice : 0,
    },
};
const FilterProvider = ({children}) => {
    const { products } = useProductContext();
    
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        dispatch({type : "SET_GRID_VIEW"});
    }
    
    const setListView = () => {
        dispatch({type : "SET_LIST_VIEW"});
    }
    
    const sorting = (e) => {
        const userSelectedValue = e.target.value
        dispatch({type : "GET_SORT_VALUE", payload : userSelectedValue});
    }
    const updateFilterValue = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch({type : "UPDATE_FILTERS_VALUE", payload : { name, value }});
    }

    useEffect(() => {
        dispatch({type : "ALL_FILTER_PRODUCTS", payload : products});
    }, [products]);

    useEffect(() => {
        dispatch({ type : "FILTER_PRODUCTS" });

        // dispatch({type : "SORTING_PRODUCTS", payload : products});
        dispatch({type : "SORTING_PRODUCTS"});
    }, [state.sorting_value, state.filters])
    
    
    
    return (
        <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue }}>
            {children}
        </FilterContext.Provider>
    );

}
const useFilterContext = () => {
    return useContext(FilterContext);
}

export {FilterContext, FilterProvider, useFilterContext}