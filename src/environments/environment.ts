// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    server: {
      url: 'https://us-central1-las-coloradas-development.cloudfunctions.net/app'  
    },
    firebase: {
      apiKey: "AIzaSyBm0-rrjHY3_B1aFQzMvntBSmO15S9ebdw",
      authDomain: "las-coloradas-development.firebaseapp.com",
      databaseURL: "https://las-coloradas-development.firebaseio.com",
      projectId: "las-coloradas-development",
      storageBucket: "las-coloradas-development.appspot.com",
      messagingSenderId: "70963654048"
    },
    algolia: {
      appId: 'TA1XWNDJBY',
      apiKey: '6eb50a2b55fb2d6d05dc8629ce682715',
      indexName: 'products',
      urlSync: true
    },
    mercadopago: {
      publishableKey: "TEST-5ebd6d3f-0584-4d76-8a7e-6f110b9fa5d4"
    }
};
