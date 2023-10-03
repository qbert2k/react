import {Provider} from 'react-redux';
import {renderHook} from '@testing-library/react';
import {configureStore} from '@reduxjs/toolkit';
import {useUiStore} from '../../src/hooks';
import {uiSlice} from '../../src/store';

const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            ui: uiSlice.reducer
        },
        preLoadedState: {
            ui: {...initialState}
        }
    });
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
});