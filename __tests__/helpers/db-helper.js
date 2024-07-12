const app = require('../../app');
const prisma = require('./prisma');
const request = require('supertest');

const dbHelper = {
  // validUser: { email: 'dani@test.com', name: 'Dani', password: 'test' },

  //   async userPostRequest(validUser) {
  //       return request = await request(app).post('/api/user').send(validUser);
  //   },
    async resetDb() {
        try {
            prisma.$transaction([prisma.user.deleteMany()]);
            console.log('Database reset succesfully');
        } catch (error) {
            console.error(
                `Error deleting data from database with error: ${error}`
            );
        }
    },
};

module.exports = dbHelper;
