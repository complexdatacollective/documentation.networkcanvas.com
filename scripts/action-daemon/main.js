const restify = require('restify');
const crypto = require('crypto');
const { exec } = require('child_process');

const SECRET = process.env.SECRET;
const RATE_LIMIT = process.env.RATE_LIMIT || 5 * 60 * 1000; // Rate limit default to once per 5 minutes
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

const signatureHeaderName = 'X-Hub-Signature';

const state = {
  running: false,
  lastRun: new Date(0),
};

const verifySignature = (payload = '', signature = '') => {
  const hmac = crypto.createHmac('sha1', SECRET);
  const digest = Buffer.from('sha1=' + hmac.update(payload).digest('hex'), 'utf8');
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
    console.log('Request could not be verified');
    
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
  console.log('hi');

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
    .then(console.log)
    .catch(console.error)
    .finally(() => {
      state.running = false;
      state.lastRun = new Date();
    });
});

app.listen(PORT);
console.log(`Node server running on port ${PORT}`);
