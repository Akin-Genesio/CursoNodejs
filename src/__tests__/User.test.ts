import request from 'supertest'
import { createConnection, getConnection } from 'typeorm'
import { app } from '../app'

import CreateConnection from '../database'

describe("Users", () =>{
    beforeAll(async () =>{
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.dropDatabase()
        await connection.close()
    })
   
    it('Should be able to create a new user', async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            name: "User Name"
        })

        expect(response.status).toBe(201)
    })

    it("Should not be able to create a user with exist email", async () =>{
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            name: "User Name"
        })

        expect(response.status).toBe(400)
    })
})