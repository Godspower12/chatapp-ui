import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userValue: false
    },

    reducers: {
        showForm: (state) => {
            state.userValue = !state.userValue
        }
    }
});

export const {showForm} = userSlice.actions;

export default userSlice.reducer
 