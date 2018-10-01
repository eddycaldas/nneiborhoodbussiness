const knex = require('./')

// const Business = knex("business")

module.exports = {
  business: {
    delete(id) {
      return knex('business').where({id}).delete()
    },
    create(body) {
      return knex('business').insert(body)
    },
    read(id) {
      return knex('business').where({id}).first()
    },
    list() {
      return knex('business')
    },
  }
}
