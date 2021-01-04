const http = require('http');
const { exec } = require('child_process');

const RATE_LIMIT = process.env.RATE_LIMIT || 5 * 60 * 1000; // Rate limit default to once per 5 minutes
const PORT = process.env.PORT || 17005;
const DEPLOY_SCRIPT = process.env.DEPLOY_SCRIPT;

if (!DEPLOY_SCRIPT) {
  console.log('DEPLOY_SCRIPT not defined. exiting.');
  process.exit();
}

console.log(`Deploy script is ${DEPLOY_SCRIPT}`);

const state = {
  running: false,
  lastRun: new Date(0),
};

const getNextRunDate = () =>
  new Date(state.lastRun.getTime() + RATE_LIMIT);

const updateDocs = () =>
  new Promise((resolve, reject) => {
    exec(
      DEPLOY_SCRIPT,
      (error, stdout, stderr) => {
        if (error) { return reject(error.message); }
        if (stderr) { return reject(stderr); }
        resolve(stdout);
      },
    );
  });

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // If already running, wait
  if (state.running) {
    res.end('busy\n');
    return;
  }

  const nextRunDate = getNextRunDate();

  // If run recently, wait
  if (state.lastRun !== null && Date.now() < nextRunDate.getTime()) {
    res.end(`rate limited until ${nextRunDate}\n`);
    return;
  }

  state.running = true;

  res.end(`ok`);

  updateDocs()
    .then(console.log)
    .catch(console.error)
    .finally(() => {
      state.running = false;
      state.lastRun = new Date();
    });
});

app.listen(PORT, '0.0.0.0');
console.log(`Node server running on port ${PORT}`);
