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
        },
        actionCloseMenu: (state)=>{
            state.isOpenMenu = false;
        }
    }
})

export default appSlice.reducer
export const {actionToggleMenu, actionCloseMenu} = appSlice.actions