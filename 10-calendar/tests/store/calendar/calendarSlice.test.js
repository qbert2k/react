import {calendarSlice, onAddNewEvent, onSetActiveEvent, onUpdateEvent} from '../../../src/store';
import {
    calendarWithActiveEventState,
    calendarWithEventsState,
    events,
    initialState
} from '../../fixtures/calendarStates';

describe('Test calendarSlice', () => {

    test('should return the default initial state', () => {
        const state = calendarSlice.getInitialState();

        expect(state).toEqual(initialState);
    });

    test('should activate the event', () => {
       const state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]));

       expect(state).toEqual(calendarWithActiveEventState);
    });

    test('should add an event', () =>{
        const newEvent = {
            id: '3',
            start: new Date('2024-06-12 20:00:00'),
            end: new Date('2024-06-12 22:00:00'),
            title: 'B-day Milena',
            notes: 'Some more notes'
        };

        const state = calendarSlice.reducer(calendarWithEventsState, onAddNewEvent(newEvent));

        expect(state.events).toEqual([...events, newEvent]);
    });

    test('should update an event', () =>{
        const updatedEvent = {
            id: '1',
            start: new Date('2024-06-12 20:00:00'),
            end: new Date('2024-06-12 22:00:00'),
            title: 'B-day Milena updated',
            notes: 'Some more notes updated'
        };

        const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updatedEvent));

        expect(state.events.length).toBe(calendarWithEventsState.events.length);
        expect(state.events).toContain(updatedEvent);
    });
});