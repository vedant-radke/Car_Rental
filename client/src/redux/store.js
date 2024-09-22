import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import carReducer from "./carSlice";

export const store = configureStore({
  reducer:{
    app : userReducer,
    car : carReducer
  }
})

export default store;