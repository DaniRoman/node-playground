const mainController = {
    funct1(req, res) {
        let one = { obj: 'EL Gran Hasbula' };
        console.log(one);
        console.log("Joser");

        return res.send(one);
    },
};

module.exports = mainController;
