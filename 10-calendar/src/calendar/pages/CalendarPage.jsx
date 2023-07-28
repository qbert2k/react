import {Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {addHours} from 'date-fns';
import {CalendarEvent, Navbar} from '../';
import {localizer, getMessagesES} from '../../helpers';
import {useState} from "react";

const events = [{
    title: 'Cumpleaños del Jefe',
    notes: 'Comprar una torta',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Javier'
    }
}];

export const CalendarPage = () => {

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
        console.log({doubleClick: event});
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
        </>
    );
}