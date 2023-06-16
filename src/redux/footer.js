import { createSlice } from "@reduxjs/toolkit";


export const footerSlice = createSlice({
    name: 'footer',
    initialState: {
        footerValue: false
    },

    reducers: {
        showFooter: (state) => {
            state.footerValue = !state.footerValue
        }
    }
});

export const {showFooter} = footerSlice.actions;

export default footerSlice.reducer
 