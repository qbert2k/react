import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {render, screen} from '@testing-library/react';
import {LoginPage} from '../../../src/auth/pages';
import {authSlice} from '../../../src/store/auth';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
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

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1)
    });
});