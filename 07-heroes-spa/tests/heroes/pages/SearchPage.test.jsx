import {MemoryRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {SearchPage} from '../../../src/heroes';

describe('Test <SearchPage/>', () => {

    test('Should render the component with default values', () => {
        const {container} = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });

    test('Should render Batman result', () => {
        const {container} = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        const img = screen.getByRole('img');
        expect(img.src).toContain('/public/heroes/dc-batman.jpg');

        const alertDanger = screen.getByLabelText('alert-danger');
        expect(alertDanger.style.display).toBe('none');
    });
})