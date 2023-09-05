import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

import { todoSlice } from "./slices/todoSlice";

export const store = configureStore({
  reducer: {
    setUser: userReducer,
    [todoSlice.name]: todoSlice.reducer,
  },
});
