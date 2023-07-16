# Install and Configure Jest + React Testing Library
## React + Vite Projects

1. Install:

```shell
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Optional: If we are using Fetch API in the project:

```shell
yarn add --dev whatwg-fetch
```

3. Update Script __package.json__

```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Create babel configuration file __babel.config.cjs__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional: Create Jest config y setup:

__jest.config.cjs__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
import 'whatwg-fetch';
```

