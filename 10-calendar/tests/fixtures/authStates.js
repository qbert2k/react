export const initialState = {
    status: 'checking',
    user: {},
    errorMessage: undefined
};

export const authenticatedState = {
    status: 'authenticated',
    user: {
        uid: 'abc',
        name: 'Javier'
    },
    errorMessage: undefined
};

export const unauthenticatedState = {
    status: 'not-authenticated',
    user: {},
    errorMessage: undefined
};