const request = require('supertest');
const { server, start } = require('./server');

afterAll((done) => {
  if (server.listening) {
    server.close(done);
  } else {
    done();
  }
});

describe('GET /', () => {
  it('responds 200 with Hello, World!', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/text\/plain/);
    expect(res.text).toBe('Hello, World!\n');
  });
});

describe('GET /health', () => {
  it('responds 200 with OK', async () => {
    const res = await request(server).get('/health');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/text\/plain/);
    expect(res.text).toBe('OK\n');
  });
});

describe('unknown routes', () => {
  it('GET /unknown responds 404 with Not Found', async () => {
    const res = await request(server).get('/unknown');
    expect(res.status).toBe(404);
    expect(res.text).toBe('Not Found\n');
  });

  it('POST / responds 404', async () => {
    const res = await request(server).post('/');
    expect(res.status).toBe(404);
    expect(res.text).toBe('Not Found\n');
  });

  it('DELETE /health responds 404', async () => {
    const res = await request(server).delete('/health');
    expect(res.status).toBe(404);
    expect(res.text).toBe('Not Found\n');
  });
});

describe('start()', () => {
  it('starts the server and resolves with the listening instance', async () => {
    const s = await start(0, '127.0.0.1');
    expect(s.listening).toBe(true);
    await new Promise((resolve) => s.close(resolve));
  });
});
