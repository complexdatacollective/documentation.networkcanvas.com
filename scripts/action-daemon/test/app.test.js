process.env.DEPLOY_SCRIPT = 'exit 0';
process.env.SECRET = '57afda7dac7a87cde6b4274567365f29f40163a3';

const request = require('supertest');
const t = require('tap');
const app = require('../app');

const done = (test) =>
  (err) => {
    if (err) { throw err; };
    test.end();
  };

t.test('404 for bad urls', (test) => {
  request(app)
    .post('/non-existent-route')
    .expect(404)
    .end(done(test));
});

t.test('Deny requests without secret', (test) => {
  request(app)
    .post('/deploy')
    .expect('Content-Type', /json/)
    .expect(403)
    .end(done(test));
});

t.test('Allow requests with secret', (test) => {
  request(app)
    .post('/deploy')
    .send({ foo: 'bar' })
    .set('X-Hub-Signature-256', 'sha256=a10d071afa53ebd439a6a0e39044562314a3c4f28642d98eedf1fafd70b919ed')
    .expect('Content-Type', /json/)
    .expect(200, (err, res) => {
      t.same(res.body.status, 'ok');
      test.end();
    })
});

t.test('Rate limit requests (stateful, depends on "Allow requests with secret")', (test) => {
  request(app)
    .post('/deploy')
    .send({ foo: 'bar' })
    .set('X-Hub-Signature-256', 'sha256=a10d071afa53ebd439a6a0e39044562314a3c4f28642d98eedf1fafd70b919ed')
    .expect('Content-Type', /json/)
    .expect(200, (err, res) => {
      t.match(res.body.status, /^rate limited until/);
      test.end();
    })
});
