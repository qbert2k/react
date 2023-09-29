import {useDispatch, useSelector} from 'react-redux';
import {onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent} from '../store';
import {calendarApi} from '../api';
import {convertEventsToDateEvents} from '../helpers';

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector(state => state.calendar);
    const {user} = useSelector(state => state.auth);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    };

    const startSavingEvent = async (calendarEvent) => {
        if (calendarEvent._id) { // Update
            // TODO: Update event
            dispatch(onUpdateEvent({
                ...calendarEvent
            }));
        } else { // Create
            const {data} = await calendarApi.post('/events', calendarEvent);
            dispatch(onAddNewEvent({
                ...calendarEvent,
                id: data.event.id,
                user
            }));
        }
    };

    const startDeletingEvent = () => {
        // TODO: delete in backend
        dispatch(onDeleteEvent());
    };

    const startLoadingEvents = async () => {
        try {
            const {data} = await calendarApi.get('/events');
            const events = convertEventsToDateEvents(data.events);
            console.log(events)
        } catch (error) {
            console.log('Error loading events');
            console.log(error);
        }
    };

    return {
        // Properties
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        // Methods
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents
    };
}