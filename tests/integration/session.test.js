const request = require("supertest")


const app = require("../../src/app")
const { User } = require("../../src/app/models")

describe("Auth tests", () => {
    beforeEach(async () => {
        await (require("../utils/truncate"))()
    })

    it("should authenticate with valid credentials", async () => {
        const newUser = await User.create({
            name: "doug",
            email: "doug@doug.com.br",
            password: "123456"
        })


        const response = await request(app)
            .post("/sessions")
            .send({
                "email": "doug@doug.com.br",
                "senha": "123456"
            })

        expect(response.status).toBe(202)
    })

    it("should not authenticate with invalid credentials", async () => {
        const response = await request(app)
            .post("/sessions")
            .send({
                "email": "abc",
                "senha": "0987654321"
            })

        expect(response.status).toBe(401)
    })
})
