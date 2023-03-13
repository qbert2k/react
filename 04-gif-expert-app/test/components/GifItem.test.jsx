import {render, screen} from '@testing-library/react';
import {GifItem} from '../../src/components/GifItem';

describe('Test component <GifItem />', () => {

    const title = 'Doraemon';
    const url = 'https://doraemon.com/image.jpg';

    test('should match the snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}/>);

        expect(container).toMatchSnapshot();
    });

    test('should show the image with the URL and ALT', () => {
        render(<GifItem title={title} url={url}/>);

        const {src, alt} = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });


    test('should show the title in the component', () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });
});
