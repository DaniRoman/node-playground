const request = require('supertest');
const app = require('../../app');

it('do something', async function () {
    const response = await request(app).get('/');
    expect(response.status).toEqual(200);
});

it('do something2', async function () {
    const response = await request(app).get('/');
    expect(response.body.obj).toEqual('EL Gran Hasbula');
});

// it('testing the database', async function () {
//     const savedUser = {
//         emai: 'test@test.com',
//         name: 'test',
//     };

//     // prismaMock.user.create.mockResolvedValue(savedUser)

//     const response = await request(app)
//         .post('/user')
//         .send({ email: 'test@test.com', name: 'Hasbula' });
//     expect(response.statusCode).toEqual(201);

//     // const allUsers = await prismaMock.user.findMany();
//     // console.log(allUsers);
//     // expect(allUsers.length).toEqual(1);
// });
