// production: environment.prod.ts
// development: environment.dev.ts
// default (no env params): environment.ts

export const environment = {
  production: true,
  googleApiKey: '',
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  }
};
