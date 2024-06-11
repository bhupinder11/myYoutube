import { createSlice } from "@reduxjs/toolkit";


const modeSlice = createSlice({
    name: "mode",
    initialState: {
        isDarkMode: false,
    },
    reducers : {
        toggleMode : (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        darkMode : (state) => {
            state.isDarkMode = false;
        }
    }
})

export default modeSlice.reducer;
export const {toggleMode, darkMode, isDarkMode} = modeSlice.actions;