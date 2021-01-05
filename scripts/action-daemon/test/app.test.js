process.env.DEPLOY_SCRIPT = 'exit 0';
process.env.SECRET = '57afda7dac7a87cde6b4274567365f29f40163a3';

const request = require('supertest');
const tap = require('tap');
const app = require('../app');

const done = (t) =>
  (err) => {
    if (err) { throw err; };
    t.end();
  };

tap.test('404 for bad urls', (t) => {
  request(app)
    .post('/non-existent-route')
    .expect(404)
    .end(done(t));
});

tap.test('Deny requests without secret', (t) => {
  request(app)
    .post('/deploy')
    .expect('Content-Type', /json/)
    .expect(403)
    .end(done(t));
});

tap.test('Allow requests with secret', (t) => {
  request(app)
    .post('/deploy')
    .send({ foo: 'bar' })
    .set('X-Hub-Signature-256', 'sha256=a10d071afa53ebd439a6a0e39044562314a3c4f28642d98eedf1fafd70b919ed')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(done(t));
});
