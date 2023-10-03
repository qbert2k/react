import {Provider} from 'react-redux';
import {renderHook} from '@testing-library/react';
import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from '../../src/store';
import {useAuthStore} from '../../src/hooks';

const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            auth: authSlice.reducer
        },
        preloadedState: {
            auth: {...initialState}
        }
    })
};

describe('Test useAuthStore', () => {

    test('should return the default values', () => {
        const mockStore = getMockStore({
            status: 'checking',
            user: {},
            errorMessage: undefined
        });

        const {result} = renderHook(            ()=> useAuthStore(),{
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
        });

        console.log(result.current);
        expect(result.current).toEqual({
            status: 'checking',
            user: {},
            errorMessage: undefined,
            checkAuthToken: expect.any(Function),
            startLogin: expect.any(Function),
            startRegister: expect.any(Function),
            startLogout: expect.any(Function)
        });
    });
})