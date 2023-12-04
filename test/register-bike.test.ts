import request from 'supertest'
import server from '../src/server'
import prisma from '../src/external/database/db'

describe('Register bike route', () => {
    beforeEach(async () => {
        await prisma.bike.deleteMany({})
    })

    afterAll(async () => {
        await prisma.bike.deleteMany({})
    })

    it('registers a bike with valid data', async () => {
        await request(server)
            .post('/api/bikes')
            .send({
                name: 'Monark 400',
                type: 'Street',
                bodySize: 15,
                maxLoad: 2,
                rate: 4.5,
                description: "Common bike",
                ratings: 315,
                imageUrls: [],
                available: true,
                 location: new Location()
            })
            .expect(201)
            .then((res) => {
                expect(res.body.id).toBeDefined()
            })
    })
})