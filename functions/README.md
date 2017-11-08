# LasColoradas Functions

## Build

Run `npm run build` to build the project. Use `npm run build:prod` to build production env.

## Environment Configuration

Set Enviroment `firebase functions:config:set someservice.key="THE_API_KEY" -P <development | default>`.
Get Enviroment `firebase functions:config:get someservice -P <development | default>`

## Deploy

Run `firebase deploy --only functions -P <development | default>`