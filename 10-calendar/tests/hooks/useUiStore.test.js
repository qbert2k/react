import {Provider} from 'react-redux';
import {act, renderHook} from '@testing-library/react';
import {configureStore} from '@reduxjs/toolkit';
import {useUiStore} from '../../src/hooks';
import {uiSlice} from '../../src/store';

const getMockStore = ( initialState ) => {
    return configureStore({
        reducer: {
            ui: uiSlice.reducer
        },
        preloadedState: {
            ui: { ...initialState }
        }
    })
};

describe('Test useUiStore', () => {

    test('should return the default values', () => {
        const mockStore = getMockStore({isDateModalOpen: false});

        const {result} = renderHook(() => useUiStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
        });

        expect(result.current).toEqual({
            isDateModalOpen: false,
            openDateModal: expect.any(Function),
            closeDateModal: expect.any(Function),
            toggleDateModal: expect.any(Function)
        });
    });

    test('should set isDateModelOpen to true', () => {
        const mockStore = getMockStore({isDateModalOpen: false});
        const {result} = renderHook(() => useUiStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
        });
        const {openDateModal} = result.current;

        act(() => {
            openDateModal();
        });

        expect(result.current.isDateModalOpen).toBeTruthy();
    });

    test('should set isDateModelOpen to false', () => {
        const mockStore = getMockStore({isDateModalOpen: true});
        const {result} = renderHook(() => useUiStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
        });
        const {closeDateModal} = result.current;

        act(() => {
            closeDateModal();
        });

        expect(result.current.isDateModalOpen).toBeFalsy();
    });

    test('should toggle isDateModelOpen', () => {
        const mockStore = getMockStore({isDateModalOpen: true});
        const {result} = renderHook(() => useUiStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
        });

        act(() => {
            result.current.toggleDateModal();
        });
        expect(result.current.isDateModalOpen).toBeFalsy();

        act(() => {
            result.current.toggleDateModal();
        });
        expect(result.current.isDateModalOpen).toBeTruthy();
    });
});