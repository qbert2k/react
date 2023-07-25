import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
}

export const journalSlice = createSlice({
    name: 'journal', initialState, reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
            state.messageSaved = '';
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;

            state.notes = state.notes.map((note) => {
                if (action.payload.id === note.id) {
                    note = action.payload;
                }

                return note;
            });

            state.messageSaved = `${action.payload.title}, successfully updated`;
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageURL = [...state.active.imageURL, ...action.payload];
            state.isSaving = false;
        },
        deleteNoteById: (state, action) => {

        }
    },
})

// Action creators are generated for each case reducer function
export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    setPhotosToActiveNote,
    deleteNoteById
} = journalSlice.actions;
