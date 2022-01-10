// const getImagenPromesa = () =>
//     new Promise(resolve => resolve('https://asdf.com'));
//
// getImagenPromesa().then(console.log);

// const getImagen = async () => {
//     return 'https://asdf.com';
// };
//
// getImagen().then(console.log);


const getImagen = async () => {
    try {
        const apiKey = 'DXGF5aEdYUiPebwCAF7ILESVrmeXHI0M';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const {data} = await respuesta.json();
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // manejo del error
        console.error(error);
    }
};

getImagen();