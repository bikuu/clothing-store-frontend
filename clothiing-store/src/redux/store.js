import { configureStore } from "@reduxjs/toolkit";

import drawerReducer from "./slice/drawerSlice";

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
  },
});
