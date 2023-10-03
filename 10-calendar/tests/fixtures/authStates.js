import {testUserCredentials} from './testUser';

export const initialState = {
    status: 'checking',
    user: {},
    errorMessage: undefined
};

export const authenticatedState = {
    status: 'authenticated',
    user: {
        uid: testUserCredentials.uid,
        name: testUserCredentials.name
    },
    errorMessage: undefined
};

export const unauthenticatedState = {
    status: 'not-authenticated',
    user: {},
    errorMessage: undefined
};