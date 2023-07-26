import {startNewNote} from '../../../src/store/journal/thunks';

describe('Test Journal thunk', function () {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Should create a new note', async () => {
        const uid = 'TEST-UUID-123';
        getState.mockReturnValue({auth: {uid}});

        await startNewNote()(dispatch, getState);
    });
});