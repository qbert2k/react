import {calendarApi} from '../../src/api';

describe('Test CalendarApi', () => {

    test('Should have the default configuration', () => {
        expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
    });

    test('Should have x-token in the http request header', async() => {
        const token = 'ABC-123-XYZ';
        localStorage.setItem('token', token);

        const res = await calendarApi.get('/auth');

        expect(res.config.headers['x-token']).toBe(token);
    });
});