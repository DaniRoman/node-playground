const prisma = require('../helpers/prisma');
const request = require('supertest');
const app = require('../../app');

describe('User Registration', function () {
    it('Api call', async () => {
        let response;
        response = await request(app).get('/api/user');
        expect(response.status).toBe(200);
    });
    it('returns 200 when signup request is valid', async () => {
        let response;
        try {
            response = await request(app).post('/api/user').send({
                email: 'dani@test.com',
                name: 'Dani',
                password: '1234',
            });
            expect(response.status).toBe(200);
        } catch (error) {
            console.error(`Error during create the user: ${error}`);
        }
    });

    it('returns succesful message when signup request is valid', async () => {
        let response;
        try {
            response = await request(app).post('/api/user').send({
                email: 'dani@test.com',
                name: 'Dani',
                password: '1234',
            });
            expect(response.body.message).toBe('User created Successfully!');
        } catch (error) {
            console.error(`Error during create the user: ${error}`);
        }
    });
    it('Save the user to the Database', async () => {
        try {
            let response;
            let userList;

            response = await request(app).post('/api/user').send({
                email: 'dani@test.com',
                name: 'Dani',
                password: '1234',
            });
            userList = await prisma.user.findMany();
            expect(userList).toHaveLength(1);
        } catch (error) {
            console.error(`El error es ${error}`);
        }
    });
    it('Save the username and email to the Database', async () => {
        try {
            let response;
            let userList;

            response = await request(app).post('/api/user').send({
                email: 'dani@test.com',
                name: 'Dani',
                password: '1234',
            });
            userList = await prisma.user.findMany();
            const savedUser = userList[0];
            expect(savedUser.name).toBe('Dani');
            expect(savedUser.email).toBe('dani@test.com');

        } catch (error) {
            console.error(`El error es ${error}`);
        }
    });
    it('hashes the password to the Database', async () => {
        try {
            let response;
            let userList;

            response = await request(app).post('/api/user').send({
                email: 'dani@test.com',
                name: 'Dani',
                password: '1234',
            });
            userList = await prisma.user.findMany();
            const savedUser = userList[0];
            expect(savedUser.password).not.toBe('1234');

        } catch (error) {
            console.error(`El error es ${error}`);
        }
    });
});
