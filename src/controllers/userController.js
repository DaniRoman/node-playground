const prisma = require('../../client');

const userController = {
    async userPost(req, res) {
        const { email, name } = req.body;
        await prisma.user.create({
            data: { email, name },
        });
        console.log("aloha para despues del post ");

    },
};

module.exports = userController;
