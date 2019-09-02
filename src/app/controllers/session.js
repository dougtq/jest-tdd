const { User } = require("../models")

class Session {
    async store (req, res) {
        const { email, senha } = req.body

        const auth_user = await User.findOne({ where: { email } })

        if (!auth_user) {
            return res.status(401).send()
        }

        if (!(await auth_user.checkPassword(senha))) {
            return res.status(401).send()
        }

        await res.status(202).send({})
    }
}

module.exports = new Session()
