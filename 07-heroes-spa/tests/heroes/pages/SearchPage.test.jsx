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

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('');

        const alertSearchHero = screen.getByLabelText('alert-search-hero');
        expect(alertSearchHero.style.display).toBe('');

        const alertNoHero = screen.getByLabelText('alert-no-hero');
        expect(alertNoHero.style.display).toBe('none');
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

        const alertSearchHero = screen.getByLabelText('alert-search-hero');
        expect(alertSearchHero.style.display).toBe('none');

        const alertNoHero = screen.getByLabelText('alert-no-hero');
        expect(alertNoHero.style.display).toBe('none');
    });

    test('Should display an error if the hero is not found', () => {
        const {container} = render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman123');

        const alertSearchHero = screen.getByLabelText('alert-search-hero');
        expect(alertSearchHero.style.display).toBe('none');

        const alertNoHero = screen.getByLabelText('alert-no-hero');
        expect(alertNoHero.style.display).toBe('');
    });

    test('Should call navigate', () => {

    });
})