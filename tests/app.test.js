const request = require("supertest")
const app = require("../src/app")

beforeAll(() => {
  process.env.NODE_ENV = "test"
})

it("Creates root endpoint", async () => {
  return request(app).get("/").expect(200)
})

it("Creates example endpoint", async () => {
  return request(app).get("/example").expect(200)
})
