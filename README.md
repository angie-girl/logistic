# Logistic

![forthebadge](https://forthebadge.com/images/badges/0-percent-optimized.svg)

![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)

![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)

## Reference documentation:

List of technologies and version used in this project

- [Angular v14](https://angular.io/docs)
- [Ionic Capacitor v3](https://capacitorjs.com/docs)
- [Bootstrap v5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Ionic CLI](https://ionicframework.com/docs/cli)
- [Firebase](https://firebase.google.com/docs)
- [Angular Fire](https://www.npmjs.com/package/@angular/fire)

## First steps

```bash
# Fist setup your environment
npm install -g @angular/cli@12
npm install -g @ionic/cli

# Now install project packages
npm install
```

## Usage

To serve application on local environment:

    ng serve -o

To see realtime changes inside your browser, and your testing device or emulator simultaneously use

    ionic cap run {platform} -l --external

and follow directions that flow.

To run application only on the mobile device you can use:

    npx cap run {platform}

## Mobile development builds

To build application and test native API on a mobile device use:

    ng build && npx cap sync {platform} && npx cap open {platform}

{platofrm} beeing android or ios.

## Publication

To publish application on development environment use:

    ng build --prod && firebase deploy --only=hosting

## Useful links

To generate splash screen and app icon easily use link below for cordova-res package
https://capacitorjs.com/docs/guides/splash-screens-and-icons

## Useful commands
