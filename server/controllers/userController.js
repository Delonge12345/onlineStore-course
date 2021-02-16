//Create class in order to grouped user's methods


class UserController {
    async registration(req, res) {

    }
    async login(req, res) {

    }
    async checkRole(req, res) {
        const {id} = req.query
        res.json(id)
    }
}


module.exports = new UserController()