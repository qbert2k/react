import {AppRouter} from './router/AppRouter';
import {BrowserRouter} from 'react-router-dom';

export const CalendarApp = () => {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}