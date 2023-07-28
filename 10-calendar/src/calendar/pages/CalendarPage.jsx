import {useState} from 'react';
import {Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {CalendarEvent, CalendarModal, Navbar} from '../';
import {getMessagesES, localizer} from '../../helpers';
import {useCalendarStore, useUiStore} from '../../hooks';

export const CalendarPage = () => {
    const {openDateModal} = useUiStore();
    const {events} = useCalendarStore();

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        };

        return {
            style
        };
    };

    const onDoubleCLick = (event) => {
        openDateModal();
    };

    const onSelect = (event) => {
        console.log({selectClick: event});
    };

    const onViewChange = (event) => {
        localStorage.setItem('lastView', event);
    };

    return (
        <>
            <Navbar/>

            <Calendar localizer={localizer}
                      culture="es-ES"
                      events={events}
                      defaultView={lastView}
                      startAccessor="start"
                      endAccessor="end"
                      messages={getMessagesES()}
                      eventPropGetter={eventStyleGetter}
                      components={{
                          event: CalendarEvent
                      }}
                      onDoubleClickEvent={onDoubleCLick}
                      onSelectEvent={onSelect}
                      onView={onViewChange}
                      style={{height: 'calc(100vh - 80px)'}}/>

            <CalendarModal/>
        </>
    );
}