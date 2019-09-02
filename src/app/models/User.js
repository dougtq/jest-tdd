const bcrypt = require("bcryptjs")

module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING
    }, {
        hooks: {
            beforeSave: async User => {
                User.password_hash = await bcrypt.hash(User.password, 8)
            }
        }
    })

    User.prototype.checkPassword = function (password) {
       return bcrypt.compare(password, this.password_hash)
    }

    return User
}
