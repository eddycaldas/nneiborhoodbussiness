const knex = require('./')

// const Business = knex("business")

module.exports = {
  business: {
    read(id) {
      return knex('business').where({id})
    },
    list() {
      return knex('business')
    },
  }
}