import {v2 as cloudinary} from 'cloudinary';
import {fileUpload} from '../../src/helpers/fileUpload';

cloudinary.config({
    cloud_name: 'dlwwn5mfl',
    api_key: '669939436721643',
    api_secret: 'YiG5sNJMg-tSmQihJhUynsauepc',
    secure: true
});

describe('Test fileUpload', function () {

    test('Should upload a file to cloudinary', async () => {
        const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'image.png');

        const url = await fileUpload(file);

        expect(url).toEqual(expect.any(String));

        // Clean
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png', '');
        const response = await cloudinary.api.delete_resources(['journal/' + imageId], {
            resource_type: 'image'
        });
        console.log({resp: response});
    });

    test('Should return null', async () => {
        const file = new File([], 'picture.jpg');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    });
});