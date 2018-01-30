# LasColoradas


## Build and Deploy

Development `ng build --aot && firebase deploy --only hosting -P development`.
Production `ng build --prod --aot && firebase deploy --only hosting`.

## Firebase serve

`firebase serve --only functions -P development`