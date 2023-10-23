# React App

## Create Project

```shell
npx create-react-app react-app --template typescript
```

## Install

```shell
yarn install
```

## Run Project

```shell
yarn start
```

## Dependencies

```shell
yarn add react-router-dom@6
```

## System limit for number of file watchers reached

### for Debian, RedHat and other similar Linux distros
```shell
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

### for ArchLinux
```shell
echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system
```

## Links

https://reactrouter.com/en/main
https://github.com/Klerith/react-adv