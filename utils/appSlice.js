import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isOpenMenu: true,
    },
    reducers: {
        toggleMenu: (state)=>{
            state.isOpenMenu = state.isOpenMenu==true? false: true;
        }
    }
})

export default appSlice.reducer
export const {toggleMenu} = appSlice.actions