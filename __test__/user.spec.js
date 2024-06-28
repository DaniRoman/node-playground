const request = require('supertest');
const app = require('../app');

it('do something', async function () {
    const response = await request(app).get('/');
    expect(response.status).toEqual(200);
});

it('do something2', async function () {
    const response = await request(app).get('/');
    expect(response.body.obj).toEqual('EL Gran Hasbula');
});
