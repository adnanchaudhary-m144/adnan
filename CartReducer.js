import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart : (state,action) => {
            const itemInCart = state.cart.find((item) => item.id == action.payload.id);
            if(itemInCart){
                itemInCart.quantity++;
                let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
            }else{
                state.cart.push({...action.payload,quantity:1})
            }
        },
        removeFromCart : (state,action) => {
            const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = removeFromCart;
        },
        incrementQuantity : (state,action) => {
            const itemInCart = state.cart.find((item) => item.id == action.payload.id);
            itemInCart.quantity++;
        },
        decrementQuantity : (state,action) => {
            const itemInCart = state.cart.find((item) => item.id == action.payload.id);
            if(itemInCart.quantity == 1){
                const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id);
                state.cart = removeFromCart;
            }else{
                itemInCart.quantity--;
            }

        }
    }
});


export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions;

export default cartSlice.reducer;