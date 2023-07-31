import {useDispatch, useSelector} from 'react-redux';
import {onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent} from '../store';

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    };

    const startSavingEvent = async (calendarEvent) => {
        if (calendarEvent._id) { // Update
            dispatch(onUpdateEvent({
                ...calendarEvent
            }));
        } else { // Create
            dispatch(onAddNewEvent({
                ...calendarEvent,
                _id: new Date().getTime()
            }));
        }
    };

    const startDeletingEvent = () => {
        // TODO: delete in backend
        dispatch(onDeleteEvent());
    }

    return {
        // Properties
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        // Methods
        setActiveEvent,
        startSavingEvent,
        deleteEvent: startDeletingEvent,
    };
}