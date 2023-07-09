import {UserContext} from './context/UserContext.jsx';
import {useContext} from 'react';

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <h1>LoginPage</h1>
            <hr/>

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button className="btn btn-primary"
                    onClick={() => setUser({id: 123, name: 'Javier', email: 'javier.rojas.blum@gmail.com'})}>
                Set User
            </button>
        </>
    )
}