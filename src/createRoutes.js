const kebabCase = require("lodash/kebabCase")
const fs = require("fs")
const path = require("path")
const express = require("express")

const fileToRoute = (file) => `/${kebabCase(file.replace(".js", ""))}`

const routesFolder = `${__dirname}/routes`

const createRoutes = (app) => {
  fs.readdirSync(routesFolder).forEach((file) => {
    const router = express.Router()

    const routePath = file !== "index.js" ? fileToRoute(file) : "/"
    const routeHandler = require(path.join(routesFolder, file))(router)

    app.use(routePath, routeHandler)

    console.log(`created route ${routePath}`)
  })
}

module.exports = createRoutes
