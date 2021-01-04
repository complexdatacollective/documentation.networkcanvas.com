const http = require('http');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.env.PORT || 17005;
const DEPLOY_SCRIPT = process.env.DEPLOY_SCRIPT;

if (!DEPLOY_SCRIPT) {
  console.log('DEPLOY_SCRIPT not defined. exiting.');
  process.exit();
}

console.log(`Deploy script is ${DEPLOY_SCRIPT}`);


const updateDocs = () =>
  exec(
    DEPLOY_SCRIPT,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    },
  );

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok\n');
  updateDocs();
});

// Start the server on PORT 3000
app.listen(PORT, '127.0.0.1');
console.log(`Node server running on port ${PORT}`);
