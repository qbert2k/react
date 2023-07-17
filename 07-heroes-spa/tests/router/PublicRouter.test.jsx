import {render, screen} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import {PublicRoute} from '../../src/router';
import {AuthContext} from '../../src/auth';

describe('Test <PublicRouter/>', () => {

    test('Should render the children if not authenticated', () => {
        const contextValue = {
            logged: false
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Public Route')).toBeTruthy();
    });

    test('Should navigate if authenticated', () => {
        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Strider'
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Public Route</h1>
                            </PublicRoute>
                        }/>
                        <Route path="marvel" element={<h1>Marvel Page</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Marvel Page')).toBeTruthy();
    });
});