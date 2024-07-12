const prisma = require('../../__tests__/helpers/prisma');
const bcrypt = require('bcrypt');
const userHelper = require('../helpers/user/userHelper');

const userController = {
    async userPost(req, res) {

        const { email, name, password } = req.body;
        const hashedPassword = await userHelper.passwordHaser(password);
        try {
            await prisma.user.create({
                data: { email, name, password:hashedPassword },
            });

            res.status(200).json({ message: 'User created Successfully!' });
        } catch (error) {
            console.error(`Error creating the user: ${error}`);
        }
    },

    async userGet(req, res) {
        res.status(200).json({ message: 'Success!' });
    },
};

module.exports = userController;
