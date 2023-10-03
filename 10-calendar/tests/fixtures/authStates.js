import {testUser} from './testUser';

export const initialState = {
    status: 'checking',
    user: {},
    errorMessage: undefined
};

export const authenticatedState = {
    status: 'authenticated',
    user: {
        uid: testUser.uid,
        name: testUser.name
    },
    errorMessage: undefined
};

export const unauthenticatedState = {
    status: 'not-authenticated',
    user: {},
    errorMessage: undefined
};