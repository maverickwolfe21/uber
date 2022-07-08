import { configureStore } from "@reduxjs/toolkit"; //sets up data layer
import navReducer from "./slices/navSlice"; //where nav data is stored (origin, destination, travelInfo)

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
