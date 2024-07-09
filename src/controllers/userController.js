const prisma = require('../../__tests__/helpers/prisma');

const userController = {
    async userPost(req, res) {
        const { email, name } = req.body;
        await prisma.user.create({
            data: { email, name },
        });
        console.log("aloha para despues del post ");

    },
    async userGet(req, res){
        try {
            allUsers = await prisma.user.findMany()
            console.log(`Todos los usuarios son: ${allUsers}`)
        } catch (error) {
            console.log("El error es: ", error)
        }
        
        console.log("Get del User")
    }
};

module.exports = userController;
