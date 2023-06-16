import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import footerReducer from "./footer";

export default configureStore({
    reducer: {
        user : userReducer,
        footer : footerReducer
    }
})