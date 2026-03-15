import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isOpenMenu: true,
    },
    reducers: {
        actionToggleMenu: (state)=>{
            // doesnot have any payload, it needs only state info
            state.isOpenMenu = state.isOpenMenu==true? false: true;
        }
    }
})

export default appSlice.reducer
export const {actionToggleMenu} = appSlice.actions