import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

export interface currentLanguage{
    value: boolean;
}

const initialState: currentLanguage = {
    value: false
}

export const currentLanguageSlice = createSlice ({
    name: 'Language',
    initialState,
    reducers: {
        changeLanguage: (state) => {
            state.value = !state.value;
        }
    }
})

export const {changeLanguage} = currentLanguageSlice.actions

export const selectState = (state: RootState) => state.language.value
export default currentLanguageSlice.reducer
