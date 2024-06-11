import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./helper";


const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages: []
    },
    reducers:{
        addMessage: (state, action) => {
            state.messages.push(action.payload)
            if(state.messages.length === LIVE_CHAT_COUNT){
                state.messages.shift(action.payload)
            }
        
           
            // console.log(state.messages)
            // state.messages.pop() 
    }
    }
})

export default chatSlice.reducer;
export const {addMessage} = chatSlice.actions;