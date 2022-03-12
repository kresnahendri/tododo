# Tododo

![img](https://c.tenor.com/YX5rYSUkTkYAAAAC/black-pink-du-du-ddu.gif)

Did you see it? yes, all the dancers have exactly the same movement. and imagine if all data models that are deal between the frontend and backend also ha exactly the same reference, even the same file.

In the repo, I just create a simple to-do app with Nx monorepo (api, web, mobile, and share lib). the data model that is used as a contract is shared in integrated libs, so there is will be no mismatched data between backend and frontend. Also, with Nx we got some benefits to shared code between react web and react native, all business logic and hooks is collected in one lib. with this pattern, share as much as you can, it will make good consistency to your code and project that getting bigger and bigger.

## How to run

### Setup

```sh
yarn install
npm install -g nx # install nx cli (global)
nx report
nx migrate latest # if you allready installed previous nx version
```

### Run projects

- api: `yarn api`
- web: `yarn web`
- ios: `yarn ios`
- android: `yarn android`

## Screen recording demo

<img src="http://g.recordit.co/8NyeLqykYH.gif" width="45%">
<img src="http://g.recordit.co/duU71YKE5m.gif" width="45%">
