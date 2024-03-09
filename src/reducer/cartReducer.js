const cartReducer = (state, action) => {
    if (action.type == "ADD_TO_CART") {
        const { id, color, amount, product } = action.payload;
        let existingProduct = state.cart.find((curElem) => curElem.id == id + color);
        if (existingProduct) {
            let updatedCart = state.cart.map((curElem) => {
                if (curElem.id == id + color) {
                    let newAmount = curElem.amount + amount;
                    if (newAmount >= curElem.max) {
                        newAmount = curElem.max;
                    }
                    return {
                        ...curElem,
                        amount : newAmount,
                    }
                }else{
                    // return {
                    //     ...curElem,
                    // }
                    return curElem;
                }
            })
            return {
                ...state,
                cart : updatedCart,
            }
            
        } else {
            let cartProduct = {
                id : id + color,
                color,
                amount,
                image : product.image[0].url,
                name : product.name,
                price: product.price,
                max : product.stock
            }
            return {
                ...state,
                cart : [...state.cart,cartProduct],
            }
        }
    }
    if (action.type == "REMOVE_ITEM_FROM_CART") {
        const id = action.payload;
        let updatedCart = state.cart.filter((curElem) => {
            return curElem.id != id;
        })
        return {
            ...state,
            cart : updatedCart,
        }
    }
    if (action.type == "CLEAR_CART") {
        return {
            ...state,
            cart : [],
        }
    }
    if (action.type == "INCREASE") {
        let updatedCart = state.cart.map((curElem) => {
            if (curElem.id == action.payload) {
                let newAmount = curElem.amount + 1;
                if (newAmount >= curElem.max) {
                    newAmount = curElem.max;
                }
                return {
                    ...curElem,
                    amount : newAmount,
                }
            }else{
                // return {
                //     ...curElem,
                // }
                return curElem;
            }
        });
        return {
            ...state,
            cart : updatedCart,
        }
    }
    if (action.type == "DECREASE") {
        let updatedCart = state.cart.map((curElem) => {
            if (curElem.id == action.payload) {
                let newAmount = curElem.amount - 1;
                if (newAmount < 1) {
                    newAmount = 1;
                }
                return {
                    ...curElem,
                    amount : newAmount,
                }
            }else{
                // return {
                //     ...curElem,
                // }
                return curElem;
            }
        });
        return {
            ...state,
            cart : updatedCart,
        }
    }
    // if (action.type == "TOTAL_ITEM") {
    //     var cartCount = 0;
    //     if (state.cart == null) {
    //         cartCount = 0;
    //     } else {
    //         cartCount = state.cart.reduce((initialValue, curElem) => {
    //             let { amount } = curElem;
    //             initialValue = initialValue + amount;
    //             return initialValue;
    //         },0);
    //     }
    //     return {
    //         ...state,
    //         total_item : cartCount,
    //     }
    // }
    // if (action.type == "CART_TOTAL") {
    //     var cartTotalAmount = 0;
    //     if (state.cart == null) {
    //         cartTotalAmount = 0;
    //     } else {
    //         cartTotalAmount = state.cart.reduce((initialValue, curElem) => {
    //             let { amount, price } = curElem;
    //             initialValue = initialValue + (price * amount);
    //             return initialValue;
    //         },0);
    //     }
    //     return {
    //         ...state,
    //         total_amount : cartTotalAmount,
    //     }
    // }
    if (action.type == "CART_CALCULATION") {
        if (state.cart == null) {
            return {
                ...state,
                total_item : 0,
                total_amount : 0,
            }
        }else{
            let { total_item, total_amount } = state.cart.reduce((accumulator, curElem) => {
                let { amount, price } = curElem;
                accumulator.total_item = accumulator.total_item + amount;
                accumulator.total_amount = accumulator.total_amount + (price * amount);
                return accumulator;
            }, { total_item : 0, total_amount : 0 });
            return {
                ...state,
                total_item : total_item,
                total_amount : total_amount,
            }
        }
    }
    return state;
}

export default cartReducer;
