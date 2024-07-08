const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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
    let i = 0;
    console.log("Entra?", i);

    prisma.user.create({
        data: {
            email:"dani@dani.com",
            name:"juani"
          }
    });
    console.log("Entra?");
});
