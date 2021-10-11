import { configureStore } from "@reduxjs/toolkit";
import firmsReducer from "./firms";
export default configureStore({
  reducer: {
    firms: firmsReducer,
  },
});
