import {calendarApi} from '../../src/api';

describe('Test CalendarApi', () => {

    test('should have the default configuration', () => {
        expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
    });

    test('should have x-token in the http request header', async () => {
        const token = 'ABC-123-XYZ';
        localStorage.setItem('token', token);

        const res = await calendarApi.get('/auth');

        expect(res.config.headers['x-token']).toBe(token);
    });
});