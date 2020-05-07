module.exports = (router) =>
  router
    .get("/", (req, res) => {
      res.send("GET /")
    })
    .post("/", (req, res) => {
      res.send("POST /")
    })
