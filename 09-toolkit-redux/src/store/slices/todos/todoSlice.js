import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    counter: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter = null;
        },
        decrement: (state) => {
            state.counter = null;
        },
        incrementBy: (state, action) => {
            state.counter = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementBy} = todoSlice.actions;
