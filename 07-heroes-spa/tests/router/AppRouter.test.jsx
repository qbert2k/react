import {MemoryRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {AppRouter} from '../../src/router';
import {AuthContext} from '../../src/auth';

describe('Test <AppRouter/>', () => {

    test('Should render the login if not authenticated', () => {
        const contextValue = {
            logged: false
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getAllByText('Login')).toHaveLength(2);
    });

    test('Should render the Marvel component if authenticated', () => {
        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Juanoncho'
            }
        };

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    });
});