import {MemoryRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {AuthContext} from '../../src/auth';
import {PrivateRoute} from '../../src/router';

describe('Test <PrivateRoute/>', () => {

    test('Should render the children if authenticated', () => {
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Juancho'
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Private Route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Private Route')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');
    });
});
