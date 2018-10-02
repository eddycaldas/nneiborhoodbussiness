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

router.post("/", (req, res) => {
  queries.business.create(req.body)
  .then((business) => res.json(business))
})

router.delete("/:id", (req, res) => {
  queries.business.delete(req.params.id)
  .then(() => res.sendStatus(202))
})

router.put("/:id", (req, res) => {
  queries.business.update(req.params.id, req.body)
  .then((business) => res.send(200))
})

module.exports = router