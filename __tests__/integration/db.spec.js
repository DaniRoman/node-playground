const prisma = require('../helpers/prisma');

const request = require('supertest');

const app = require('../../app');

// it('save the user to the database', async function () {
//     request(app)
//         .post('/user')
//         .send({email:'dani@dani.com', name:'Dani'})
//     const allUsers = await prisma.user.findMany();
//     expect((allUsers).length).toBe(1);
// });

it('save the user', async function () {

    const newData = await prisma.user.create({
        data: {
            email:"dani@dani.com",
            name:"juan"
          }
    });
    console.log("Entra?", newData);
    const allUsers = await prisma.user.findMany()

    expect(allUsers.length).toBe(1);
});
