import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import chatSlice from "./chatSlice"

const store = configureStore({
    reducer: {
        app: appSlice,
        chat: chatSlice // Step 2: Added to Store
    }
})

export default store;