import {AuthContext} from './AuthContext';
import {authReducer} from './authReducer.js';
import {useReducer} from 'react';

const initialState = {
    logged: false
};

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
}