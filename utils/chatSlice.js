import { createSlice } from "@reduxjs/toolkit";

// Step: 1 
const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        actionChatAdd: (state, action) =>{
            state.messages.push(action.payload)
        }
    }
})

export default chatSlice.reducer
export const {actionChatAdd} = chatSlice.actions 