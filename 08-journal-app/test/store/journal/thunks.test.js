import {startNewNote} from '../../../src/store/journal/thunks';
import {addNewEmptyNote, savingNewNote, setActiveNote} from '../../../src/store/journal/journalSlice';
import {collection, deleteDoc, doc, getDocs} from 'firebase/firestore/lite';
import {FirebaseDB} from '../../../src/firebase/config';

describe('Test Journal thunk', function () {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Should create a new note', async () => {
        const uid = 'TEST-UUID-123';
        getState.mockReturnValue({auth: {uid}});
        const expectedNote = {
            body: '',
            title: '',
            imageURL: [],
            id: expect.any(String),
            date: expect.any(Number)
        }

        await startNewNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote(expectedNote));
        expect(dispatch).toHaveBeenCalledWith(setActiveNote(expectedNote));

        // Clean
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
        const docs = await getDocs(collectionRef);

        const deletePromises = [];
        docs.forEach(doc=>deletePromises.push(deleteDoc(doc.ref)))
        await Promise.all(deletePromises);
    });
});