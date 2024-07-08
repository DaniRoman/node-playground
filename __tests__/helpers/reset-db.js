const prisma = require('./prisma');


module.exports = async () => {
    await prisma.$transaction([
        prisma.user.deleteMany()
      ])
}

