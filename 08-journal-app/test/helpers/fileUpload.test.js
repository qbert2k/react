import {fileUpload} from '../../src/helpers/fileUpload';

describe('Test fileUpload', function () {

    test('Should upload a file to cloudinary', async () => {
        const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'image.png');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');
    });
});