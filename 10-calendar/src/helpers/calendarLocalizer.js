import {format, getDay, parse, startOfWeek} from 'date-fns';
import {dateFnsLocalizer} from 'react-big-calendar';
import enUS from 'date-fns/locale/en-US';
import esES from 'date-fns/locale/es';

const locales = {
    'en-US': enUS,
    'es-ES': esES
}

export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});