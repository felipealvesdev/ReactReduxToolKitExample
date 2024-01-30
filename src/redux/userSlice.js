import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        isLogged: false,
        secondName: '',
    },
    reducers: {
        changeUser(state, { payload }) {
            return {...state, isLogged: true, name: payload}
        },
        logout(state) {
            return {...state, isLogged: false, name: ''}
        },
        changeSecondName(state, { payload }) {
            return {...state, secondName: payload}
        }
    }
})

export const { changeUser, logout, changeSecondName } = slice.actions;

export const selectUser = state => state.user;

export default slice.reducer;