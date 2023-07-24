import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isSaving: true, messageSaved: '', notes: [], // active: null,
    active: {
        id: '123456', title: '', body: '', imaeUrls: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg,
    }
}

export const journalSlice = createSlice({
    name: 'journal', initialState, reducers: {
        addNewEmptyNote: (state, action) => {

        }, setActiveNote: (state, action) => {

        }, setNotes: (state, action) => {

        }, setSaving: (state) => {

        }, updateNote: (state, action) => {

        }, deleteNoteById: (state, action) => {

        }
    },
})

// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions;
