import { configureStore } from "@reduxjs/toolkit";
import menuStore from "./menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuStore,
  },
});
