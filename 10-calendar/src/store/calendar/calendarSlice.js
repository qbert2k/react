import {createSlice} from '@reduxjs/toolkit';
import {addHours} from 'date-fns';

const tmpEvent = {
    _id: new Date().getTime(),
    title: 'Cumpleaños del Jefe',
    notes: 'Comprar una torta',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Javier'
    }
};

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tmpEvent],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, {payload}) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, {payload}) => {
            state.events.push(payload);
            state.activeEvent = null;
        }
    }
});

export const {onSetActiveEvent, onAddNewEvent} = calendarSlice.actions;