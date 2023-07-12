import {render, screen} from '@testing-library/react';
import {HomePage} from '../../src/09-useContext/HomePage.jsx';
import {UserContext} from '../../src/09-useContext/context/UserContext.jsx';

describe('Test <HomePage/>', () => {

    const user = {
        id: 1,
        name: 'Javier'
    }

    test('Should render the component without the user', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    test('Should render the component with the user', () => {

        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).not.toBe('null');

        const theUser = JSON.parse(preTag.innerHTML);
        expect(theUser.id).toBe(user.id);
        expect(theUser.name).toBe(user.name);
    });
});