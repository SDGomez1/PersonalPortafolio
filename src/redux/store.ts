import { configureStore } from "@reduxjs/toolkit";
import SwitchStateSlice from "./features/switchState/SwitchStateSlice";
import WorkInViewSlice from "./features/workInView/WorkInViewSlice";

export const store = configureStore ({
    reducer: {
        switch: SwitchStateSlice,
        workInView: WorkInViewSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch