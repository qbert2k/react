import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import {addHours, format, getDay, parse, startOfWeek} from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import {Navbar} from '../';

const locales = {
    'en-US': enUS,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

const events = [{
    title: 'My Birthday',
    notes: 'Buy a cake',
    start: new Date(),
    end: addHours(new Date(), 2);
}]

export const CalendarPage = () => {
    return (
        <>
            <Navbar/>

            <Calendar
                // localizer={localizer}
                //       events={myEventsList}
                      startAccessor="start"
                      endAccessor="end"
                      style={{height: 500}}/>
        </>
    );
}