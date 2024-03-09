const FilterReducer = (state, action) => {
    switch (action.type) {
        case "ALL_FILTER_PRODUCTS":
            let prices = action.payload.map(product => product.price);
            let max = Math.max(...prices);
            let min = Math.min(...prices);
            return {
                ...state,
                filter_products : [...action.payload],
                all_products : [...action.payload],
                filters : {
                    ...state.filters,
                    maxPrice : max,
                    minPrice : min,
                }
            }
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view : true,
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view : false,
            }
        case "GET_SORT_VALUE":
            // const userSortValue = document.getElementById("sort");
            // const sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            return {
                ...state,
                sorting_value : action.payload,
            }
        case "SORTING_PRODUCTS":
            // let newSortData = [...action.payload];
            // let tempSortProducts = [...action.payload];
            const { filter_products, sorting_value } = state;
            let newSortData = [...filter_products];
            let tempSortProducts = [...filter_products];
            const sortingProducts = (a,b) => {
                if (sorting_value === "lowest"){
                    return a.price - b.price;
                }
                if (sorting_value === "highest"){
                    return b.price - a.price;
                }
                if (sorting_value === "a-z"){
                    return a.name.localeCompare(b.name);
                }
                if (sorting_value === "z-a"){
                    return b.name.localeCompare(a.name);
                }
            }
            newSortData = tempSortProducts.sort(sortingProducts);
            // if (state.sorting_value === "highest") {
            //     const sortingProducts = (a,b) => {
            //         return b.price - a.price;
            //     }
            //     newSortData = tempSortProducts.sort(sortingProducts);
            // }
            // if (state.sorting_value === "a-z") {
            //     newSortData = tempSortProducts.sort((a,b) => {
            //         return a.name.localeCompare(b.name);
            //     })
            // }
            // if (state.sorting_value === "z-a") {
            //     newSortData = tempSortProducts.sort((a,b) => {
            //         return b.name.localeCompare(a.name);
            //     })
            // }
            return{
                ...state,
                filter_products : newSortData,
            }
        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters : {
                    ...state.filters,
                    [name] : value
                }
            }
        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text, category, company, colors, price } = state.filters;
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                });
            }
            if (category != "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.category == category;
                });
            }
            if (company != "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.company.toLowerCase() == company.toLowerCase();
                });
            }
            if (colors != "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.colors.includes(colors);
                });
            }
            if (price) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.price <= price;
                });
            }
            return {
                ...state,
                filter_products : tempFilterProduct,
            }
        case "CLEAR_FILTERS":
            return {
                ...state,
                filters : {
                    ...state.filters,
                    text : "",
                    category : "all",
                    company : "all",
                    colors : "all",
                }
            }

        default:
            return state;
    }
}

export default FilterReducer;