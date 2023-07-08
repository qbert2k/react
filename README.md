# React Tests

# Create react project vite

```shell
yarn create vite
```

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