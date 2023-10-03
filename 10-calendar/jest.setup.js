// En caso de necesitar la implementación del FetchAPI
// yarn add -D whatwg-fetch
// import 'whatwg-fetch';

// En caso de encontrar paquetes que lo requieran
// yarn add -D setimmediate
// import 'setimmediate';

// yarn add -D dotenv
require('dotenv').config({
    path: '.env.test'
});

jest.mock('./src/helpers/getEnvVariables', () => ({
    getEnvVariables: () => ({ ...process.env })
}));