import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    authSlice    
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;