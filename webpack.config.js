const path = require("path")
const JscramblerWebpack = require('jscrambler-webpack-plugin');
// Used to determine whether to watch the files or build.
const env = process.env.WEBPACK_ENV || "development"

module.exports = {
  // The main file for the bundle.
  entry: {
    totp: "./build/src/totp.js",
    login: "./build/src/login.js",
    settings: "./build/src/settings.js",
  },
  output: {
      filename: '[name].js',
//     // Name of the bundle file.
//     filename: "./build/dist/bundle.js",
//     // Directory in which the bundle should be placed.
//     // Here we're saying `dist/js/bundle.js` will be our bundled file.
     path: path.resolve(__dirname, "public/js"),
//     // These two library items tells webpack to make the code exported by main.js available as a variable called `App`.
     libraryTarget: "var",
     library: "totp"
  },
  mode: "production",
  // If we're in development mode, then watch for changes, otherwise just do a single build.
  watch: env !== "production",
  plugins: [
    new JscramblerWebpack({
      enable: true, // optional, defaults to true
      //chunks: ['totp', 'login', 'settings'], // optional, defaults to all chunks
      //ignoreFile: resolve(__dirname, '.jscramblerignore'), // optional, defaults to no ignore file
      //params: [], 
      applicationTypes: {},
      // and other jscrambler configurations
      "applicationId": "61811f6253e1b300195b9c35",
      "params": [
        {
          "name": "selfDefending"
        },
        {
          "name": "objectPropertiesSparsing"
        },
        {
          "name": "variableMasking"
        },
        {
          "name": "whitespaceRemoval"
        },
        {
          "name": "identifiersRenaming",
          "options": {
            "mode": "SAFEST"
          }
        },
        {
          "name": "globalVariableIndirection"
        },
        {
          "name": "dotToBracketNotation"
        },
        {
          "name": "stringConcealing"
        },
        {
          "name": "functionReordering"
        },
        {
          "name": "propertyKeysObfuscation",
          "options": {
            "encoding": [
              "hexadecimal"
            ]
          }
        },
        {
          "name": "regexObfuscation"
        },
        {
          "name": "booleanToAnything"
        }
      ],
      "areSubscribersOrdered": false,
      "useRecommendedOrder": true,
      "jscramblerVersion": "7.1",
      "tolerateMinification": true,
      "profilingDataMode": "off",
      "useAppClassification": true,
      "browsers": {}      
    })
  ]  
}