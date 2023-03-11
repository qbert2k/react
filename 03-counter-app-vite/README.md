# Setup Windows

Install yarn

```shell
npm install --global yarn
```

Run in powershell as administrator

```shell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

# Setup Linux

Disabling IPv6

```shell
sudo sysctl -w net.ipv6.conf.all.disable_ipv6=1
sudo sysctl -w net.ipv6.conf.default.disable_ipv6=1
sudo sysctl -w net.ipv6.conf.lo.disable_ipv6=1
```

Download dependencies

```shell
yarn
```

Run App

```shell
yarn dev
```

# Dependencies

PropTypes

```shell
yarn add prop-types
```

Jest

```shell
yarn add --dev jest
yarn add -D @types/jest

yarn add --dev babel-jest @babel/core @babel/preset-env
yarn add -D whatwg-fetch 
yarn add --dev @testing-library/react
yarn add -D jest-environment-jsdom

yarn add -D @babel/preset-react
```