import { configureStore } from "@reduxjs/toolkit";
import SwitchStateSlice from "./features/switchState/SwitchStateSlice";
import WorkInViewSlice from "./features/workInView/WorkInViewSlice";
import currentLanguageSlice from "./features/currentLanguage/currentLanguageSlice";

export const store = configureStore ({
    reducer: {
        switch: SwitchStateSlice,
        workInView: WorkInViewSlice,
        language: currentLanguageSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch