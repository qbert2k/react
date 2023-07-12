import {fireEvent, render, screen} from '@testing-library/react';
import {LoginPage} from '../../src/09-useContext/LoginPage.jsx';
import {UserContext} from '../../src/09-useContext/context/UserContext.jsx';

describe('Test <LoginPage/>', () => {

    const mockSetUser = jest.fn();

    test('Should render the component without the user', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        //screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    test('Should call setUser on button click', () => {

        const mockSetUser = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setUser: mockSetUser}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const setUserButton = screen.getByRole('button');
        fireEvent.click(setUserButton);

        expect(mockSetUser).toHaveBeenCalledWith({email: "javier.rojas.blum@gmail.com", id: 123, name: "Javier"});
    });
});