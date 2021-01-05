const restify = require('restify');
const crypto = require('crypto');
const { exec } = require('child_process');

const SECRET = process.env.SECRET;
const RATE_LIMIT = process.env.RATE_LIMIT || 5 * 60 * 1000; // Rate limit default to once per 5 minutes
const DEPLOY_SCRIPT = process.env.DEPLOY_SCRIPT;

const signatureHeaderName = 'X-Hub-Signature-256';

const state = {
  running: false,
  lastRun: new Date(0),
};

const verifySignature = (payload = '', signature = '') => {
  const hmac = crypto.createHmac('sha256', SECRET);
  const digest = Buffer.from('sha256=' + hmac.update(payload).digest('hex'), 'utf8');
  const checksum = Buffer.from(signature, 'utf8');

  if (checksum.length !== digest.length || !crypto.timingSafeEqual(digest, checksum)) {
    return false;
  }
  return true;
};

const verifyRequest = (req, res, next) => {
  const payload = JSON.stringify(req.body);
  const signature = req.header(signatureHeaderName);

  if (!verifySignature(payload, signature)) {
    res.send(403, { error: 'Request could not be verified' });
    return;
  }

  next();
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

const app = restify.createServer();

app.use(restify.plugins.bodyParser());

app.use(verifyRequest);

app.post('/deploy', (req, res) => {
  // If already running, wait
  if (state.running) {
    res.send(200, { status: 'busy' });
    return;
  }

  const nextRunDate = getNextRunDate();

  // If run recently, wait
  if (state.lastRun !== null && Date.now() < nextRunDate.getTime()) {
    res.send(200, { status: `rate limited until ${nextRunDate}` });
    return;
  }

  state.running = true;

  res.send(200, { status: 'ok' });

  updateDocs()
    .catch(console.error)
    .finally(() => {
      state.running = false;
      state.lastRun = new Date();
    });
});

module.exports = app;
