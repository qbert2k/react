import {Provider} from 'react-redux';
import {act, renderHook, waitFor} from '@testing-library/react';
import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from '../../src/store';
import {useAuthStore} from '../../src/hooks';
import {authenticatedState, initialState, unauthenticatedState} from '../fixtures/authStates';
import {testUserCredentials} from '../fixtures/testUser';
import {calendarApi} from "../../src/api/index.js";

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

    beforeEach(() => localStorage.clear());

    test('should return the default values', () => {
        const mockStore = getMockStore({...initialState});

        const {result} = renderHook(() => useAuthStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
        });

        expect(result.current).toEqual({
            ...initialState,
            checkAuthToken: expect.any(Function),
            startLogin: expect.any(Function),
            startRegister: expect.any(Function),
            startLogout: expect.any(Function)
        });
    });

    test('should login', async () => {
        const mockStore = getMockStore({...unauthenticatedState});
        const {result} = renderHook(() => useAuthStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
        });

        await act(async () => {
            await result.current.startLogin(testUserCredentials);
        });

        const {errorMessage, status, user} = result.current;
        expect({errorMessage, status, user}).toEqual(authenticatedState);
        expect(localStorage.getItem('token')).toEqual(expect.any((String)));
        expect(localStorage.getItem('token-init-date')).toEqual(expect.any((String)));
    });

    test('should fail when login', async () => {
        const mockStore = getMockStore({...unauthenticatedState});
        const {result} = renderHook(() => useAuthStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
        });

        await act(async () => {
            await result.current.startLogin({
                email: 'doesnotexists@test.com',
                password: '123456789'
            });
        });

        expect(localStorage.getItem('token')).toBeNull();
        expect(localStorage.getItem('token-init-date')).toBeNull();
        const {errorMessage, status, user} = result.current;
        expect({errorMessage, status, user}).toEqual({
            ...unauthenticatedState,
            errorMessage: 'Incorrect credentials'
        });
        await waitFor(
            () => expect(result.current.errorMessage).toBe(undefined)
        );
    });

    test('should create an user', async () => {
        const newUser = {
            email: 'test.user@test.com',
            password: '123456879',
            name: 'Test User'
        };
        const mockStore = getMockStore({...unauthenticatedState});
        const {result} = renderHook(() => useAuthStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
        });
        const spy = jest.spyOn(calendarApi, 'post')
            .mockReturnValue({
                data: {
                    ok: true,
                    uid: '123456789',
                    name: 'Test User',
                    token: 'THE-TOKEN'
                }
            });

        await act(async () => {
            await result.current.startRegister(newUser);
        });

        const {errorMessage, status, user} = result.current;
        expect({errorMessage, status, user}).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: {name: 'Test User', uid: '123456789'}
        });

        spy.mockRestore();
    });

    test('should fail when creating a new user', async () => {
        const mockStore = getMockStore({...unauthenticatedState});
        const {result} = renderHook(() => useAuthStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
        });

        await act(async () => {
            await result.current.startRegister({
                ...testUserCredentials,
                name: 'Test User',
            });
        });

        const {errorMessage, status, user} = result.current;
        expect({errorMessage, status, user}).toEqual({
            ...unauthenticatedState,
            errorMessage: 'User already exists'
        });
        await waitFor(
            () => expect(result.current.errorMessage).toBe(undefined)
        );
    });

    test('checkAuthToken should fail when there is no token', async () => {
        const mockStore = getMockStore({...initialState});
        const {result} = renderHook(() => useAuthStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
        });

        await act(async () => {
            await result.current.checkAuthToken();
        });

        const {errorMessage, status, user} = result.current;
        expect({errorMessage, status, user}).toEqual(unauthenticatedState);
    });
});