# OWASP AppSec USA 2021 talk - Bots have gone phishing, but all they get is the boot
## Configuration
### Setup
Add the following to your /etc/hosts
```
127.0.0.1    virtualbank.com api.virtualbank.com
```

### Build
`npm i`
`webpack --mode production`

### Options
You can enable or disable sending OTT with every login by setting to true `config.useOtt` in `index.js`.
The use of Jscrambler can be set in `webpack.config.js` by controlling JscramblerWebpack's `enable` property.

## Running
To run, type `npm run watch`
Open `http://virtualbank.com:3000`
