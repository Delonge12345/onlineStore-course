//Create class in order to grouped user's methods


class UserController {
    async registration(req, res) {

    }
    async login(req, res) {

    }
    async checkRole(req, res) {
        res.json( 'Checked!')
    }
}


module.exports = new UserController()