import {Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {addHours} from 'date-fns';
import {CalendarEvent, Navbar} from '../';
import {localizer, getMessagesES} from '../../helpers';

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

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style={
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        };

        return {
            style
        };
    };

    return (
        <>
            <Navbar/>

            <Calendar localizer={localizer}
                      culture="es-ES"
                      events={events}
                      startAccessor="start"
                      endAccessor="end"
                      messages={getMessagesES()}
                      eventPropGetter={eventStyleGetter}
                      components={{
                          event: CalendarEvent
                      }}
                      style={{height: 'calc(100vh - 80px)'}}/>
        </>
    );
}