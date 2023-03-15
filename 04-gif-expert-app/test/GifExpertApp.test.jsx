import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Test component <GifExpertApp />', () => {

    test('should match snapshot', () => {
        const {container} = render( <GifExpertApp /> );
        expect(container).toMatchSnapshot();
    });
});