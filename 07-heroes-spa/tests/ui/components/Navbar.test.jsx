import {MemoryRouter} from 'react-router-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import {AuthContext} from '../../../src/auth';
import {Navbar} from '../../../src/ui';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));
describe('Test <Navbar/>', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Juanoncho'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('Should render the user name', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Juanoncho')).toBeTruthy();
    });

    test('Should call logout and navigate on button click', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutButton = screen.getByRole('button');
        fireEvent.click(logoutButton);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(contextValue.logout).toHaveBeenCalledTimes(1);

        expect(mockUseNavigate).toHaveBeenCalled();
        expect(mockUseNavigate).toHaveBeenCalledWith('/login', {replace: true});
    });
});