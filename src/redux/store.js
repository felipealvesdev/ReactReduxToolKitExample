import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import testReducer from "./testeSlice";
import listReducer from "./listSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        test: testReducer,
        list: listReducer,
    }
})

