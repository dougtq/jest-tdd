const Router = require("express").Router()

// importação de rotas ao projeto
Router.post("/sessions", async (req, res, next) => {
    const Session = require("../app/controllers/session")

    await Session.store(req, res)
})


module.exports = Router
