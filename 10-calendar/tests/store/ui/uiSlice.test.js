import {onCloseDateModal, onOpenDateModal, uiSlice} from '../../../src/store';

describe('Test uiSlicer', () => {

    test('should return the default state', () => {
        expect(uiSlice.getInitialState().isDateModalOpen).toBeFalsy();
        expect(uiSlice.getInitialState()).toEqual({isDateModalOpen: false});
    });

    test('should change isDateModalOpen', () => {
        let state = uiSlice.getInitialState();

        state = uiSlice.reducer(state, onOpenDateModal());
        expect(state.isDateModalOpen).toBeTruthy();

        state = uiSlice.reducer(state, onCloseDateModal());
        expect(state.isDateModalOpen).toBeFalsy();
    });
});