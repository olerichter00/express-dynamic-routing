const express = require("express")
const createRoutes = require("./createRoutes")

const app = express()

createRoutes(app)

module.exports = app
