import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {fireEvent, render, screen} from '@testing-library/react';
import {LoginPage} from '../../../src/auth/pages';
import {authSlice} from '../../../src/store/auth';
import {notAuthenticatedState} from '../../fixtures/authFixtures';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
});

describe('Test <LoginPage/>', function () {

    test('Should render the component', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
    });

    test('Should call startGoogleSignIn on Google button click', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        );

        const googleButton = screen.getByLabelText('googleButton');
        fireEvent.click(googleButton);
    });
});