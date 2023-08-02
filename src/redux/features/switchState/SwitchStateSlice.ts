import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

export interface SwitchState{
    value: boolean;
}

const initialState: SwitchState = {
    value: false
}

export const SwitchStateSlice = createSlice ({
    name: 'switch',
    initialState,
    reducers: {
        switching: (state, action : PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
})

export const {switching} = SwitchStateSlice.actions

export const selectState = (state: RootState) => state.switch.value
export default SwitchStateSlice.reducer

