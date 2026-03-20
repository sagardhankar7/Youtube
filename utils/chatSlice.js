import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_CHAT_MESSAGE } from "./constants";

// Step: 1 
const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        actionChatAdd: (state, action) =>{
            if(state.messages.length > OFFSET_CHAT_MESSAGE) state.messages.pop()
            state.messages.unshift(action.payload)
        }
    }
})

export default chatSlice.reducer
export const {actionChatAdd} = chatSlice.actions 