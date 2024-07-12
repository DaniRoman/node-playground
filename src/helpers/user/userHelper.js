const bcrypt = require('bcrypt');

const userHelper = {
    async passwordHaser(plainPassword) {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        return hash = await bcrypt.hash(plainPassword, salt);
    },
};
module.exports = userHelper;
