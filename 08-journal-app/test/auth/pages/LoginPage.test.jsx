import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {fireEvent, render, screen} from '@testing-library/react';
import {LoginPage} from '../../../src/auth/pages';
import {authSlice} from '../../../src/store/auth';
import {notAuthenticatedState} from '../../fixtures/authFixtures';

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginWithEmailPassword: ({email, password}) => () => mockStartLoginWithEmailPassword({email, password})
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn()
}));

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
});

describe('Test <LoginPage/>', function () {

    beforeEach(() => jest.clearAllMocks());

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

        expect(mockStartGoogleSignIn).toHaveBeenCalled();
    });

    test('Should call startStartLoginWithEmailPassword on form submit', () => {
        const email = 'javier.rojas.blum@gmail.com';
        const password = '123456';

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        );

        const emailField = screen.getByRole('textbox', {name: 'Email'});
        fireEvent.change(emailField, {target: {name: 'email', value: email}});

        const passwordField = screen.getByTestId('Password');
        fireEvent.change(passwordField, {target: {name: 'password', value: password}});

        const submitForm = screen.getByLabelText('submitForm');
        fireEvent.submit(submitForm);

        expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({email, password});
    });
});