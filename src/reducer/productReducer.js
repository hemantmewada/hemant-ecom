const ProductReducer = (state, action) => {
    if (action.type === "SET_LOADING") {
    }
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading : true,
            }
        case "API_ERROR":
            return {
                ...state,
                isLoading : false,
                isError : true,
            }
        case "SET_API_DATA":
            const featuredData = action.payload.filter((product) => {
                return product.featured;
            })
            return {
                ...state,
                isLoading : false,
                isError : false,
                products : action.payload,
                featuredProducts : featuredData,
            }
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading : true,
            }
        case "SINGLE_API_ERROR":
            return {
                ...state,
                isSingleLoading : false,
                isError : true,
            }
        case "SET_SINGLE_API_DATA":
            return {
                ...state,
                isSingleLoading : false,
                isError : false,
                singleProduct : action.payload,
            }
    
        default:
            return state;
    }
}
export default ProductReducer;