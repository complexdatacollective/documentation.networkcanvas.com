const app = require('./app');

const SECRET = process.env.SECRET;
const PORT = process.env.PORT || 17005;
const DEPLOY_SCRIPT = process.env.DEPLOY_SCRIPT;

if (!DEPLOY_SCRIPT) {
  console.log('DEPLOY_SCRIPT not defined. exiting.');
  process.exit();
}

if (!SECRET) {
  console.log('SECRET not defined. exiting.');
  process.exit();
}

console.log(`Deploy script is ${DEPLOY_SCRIPT}`);

app.listen(PORT);
console.log(`Node server running on port ${PORT}`);

module.exports = app;
