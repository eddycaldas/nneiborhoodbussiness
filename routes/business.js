const express = require("express");
const router = express.Router();
const queries = require("../db/queries")

router.get("/", (req, res) => {
  queries.business.list()
  .then((data) => res.json(data))
})

router.get("/:id", (req, res) => {
  queries.business.read(req.params.id)
  .then((business) => res.json(business))
})

module.exports = router