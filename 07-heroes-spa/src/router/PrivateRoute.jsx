import {AuthContext} from '../auth/index.js';
import {Navigate} from 'react-router-dom';
import {useContext} from 'react';

export const PrivateRoute = ({children}) => {
    const {logged} = useContext(AuthContext);
    return (logged) ? children : <Navigate to="/login"/>;
}