import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

export interface WorkInView{
    value: boolean;
}

const initialState: WorkInView = {
    value: false
}

export const WorkInViewSlice = createSlice ({
    name: 'workInView',
    initialState,
    reducers: {
        setInView: (state, action : PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
})

export const {setInView} = WorkInViewSlice.actions

export const selectState = (state: RootState) => state.workInView.value
export default WorkInViewSlice.reducer

