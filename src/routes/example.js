module.exports = (router) =>
  router
    .get("/", (req, res) => {
      res.send("Cheers!")
    })
    .post("/", (req, res) => {
      res.send("Prost!")
    })
