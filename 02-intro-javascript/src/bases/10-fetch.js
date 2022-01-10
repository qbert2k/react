// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

const apiKey = 'DXGF5aEdYUiPebwCAF7ILESVrmeXHI0M';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);