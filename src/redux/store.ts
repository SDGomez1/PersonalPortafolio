import { configureStore } from "@reduxjs/toolkit";
import SwitchStateSlice from "./features/switchState/SwitchStateSlice";

export const store = configureStore ({
    reducer: {
        switch: SwitchStateSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch