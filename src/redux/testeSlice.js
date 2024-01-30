import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'test',
    initialState: {
        name: 'tshirt',
        quantity: 0,
        price: 150,
    },
    reducers: {
        incrementQuantity(state,) {
            return {...state, quantity: state.quantity + 1};
        },
        decrementQuantity(state,) {
            return {...state, quantity: state.quantity > 0 ? state.quantity - 1 : 0 };
        },
    }
});

export const { incrementQuantity, decrementQuantity} = slice.actions;

export const selectTest = state => state.test;
console.log(slice.reducer);


export default slice.reducer;