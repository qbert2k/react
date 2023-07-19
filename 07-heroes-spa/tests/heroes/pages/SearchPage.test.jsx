import {MemoryRouter} from 'react-router-dom';
import {render} from '@testing-library/react';
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
})