import {createSlice} from '@reduxjs/toolkit';
import {addHours} from 'date-fns';

const tmpEvent = {
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

    }
});

export const {} = calendarSlice.actions;