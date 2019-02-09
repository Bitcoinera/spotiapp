# Spotiapp

To use this app you would need to have Angular installed. I used the 7.3.0 version.
Also you would need to provide your own access token for Spotify in src/app/services/spotify.service.ts, inside the getQuery method.

More info on how to get this token here: 
https://developer.spotify.com/documentation/general/guides/authorization-guide/

The main purpose of this project was learning about the GET http request with Angular and communicating with public APIs. That's why I didn't make a back-end to automatically generate this token. However, everyone is welcome to make a pull request if they would like to add this feature ^^ I will be very grateful.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
