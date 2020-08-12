# Covid19-App front-end
Web application to see covid19 global info, by continent and by country.

## Project setup
First you need to install [node](https://nodejs.org/) and [npm](https://nodejs.org/). 
Then you have to install npm dependencies of the project by excuting this command in the project's root:
```
npm install
```

## Enviroment config
You need to create a .env file in project's root which must contains the following:
```
VUE_APP_API_URL=http://127.0.0.1:8000/api
```
http://127.0.0.1:8000/api -> replace with your own URL of covid19 backend service.

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
You might have some issues when building the app, please run `npm run lint` to fix it.
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
