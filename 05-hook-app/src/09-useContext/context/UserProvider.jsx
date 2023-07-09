import {UserContext} from './UserContext.jsx';
import {useState} from "react";

// const user = {
//     id: 123,
//     name: 'Javier',
//     email: 'javier.rojas.blum@gmail.com'
// }

export const UserProvider = ({children}) => {
    
    const [user, setUser] = useState();
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}