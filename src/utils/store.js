import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import modeSlice from "./modeSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    chat: chatSlice,
    mode: modeSlice
  },
});

export default store;
