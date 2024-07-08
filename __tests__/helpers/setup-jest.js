const dbReset = require('./reset-db');

beforeAll(() => {
    return dbReset()
});