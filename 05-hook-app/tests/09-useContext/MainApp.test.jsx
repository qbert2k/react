import {render, screen} from '@testing-library/react';
import {MainApp} from '../../src/09-useContext/MainApp.jsx';
import {MemoryRouter} from 'react-router-dom';

describe('Test <MainApp />', () => {

    test('Should render the Homepage', () => {
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>);

        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('Should render the Loginpage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>);

        expect(screen.getByText('LoginPage')).toBeTruthy();
    });

    test('Should render the Aboutpage', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp/>
            </MemoryRouter>);

        expect(screen.getByText('AboutPage')).toBeTruthy();
    });
});