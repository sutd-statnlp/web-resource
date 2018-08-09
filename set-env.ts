var fs = require('fs');
var yargs = require('yargs');

require('dotenv').config();

const env = yargs.argv.env;
const isProd = env === 'prod';

const targetPath = `./src/environments/environment.${env}.ts`;
const envConfigFile = `
export const environment = {
  production: ${isProd},
  debugInfoEnabled: false,
  apiUrl: "${process.env.API_URL}",
  apiKey: "${process.env.API_KEY}",
};
`
fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }
});
