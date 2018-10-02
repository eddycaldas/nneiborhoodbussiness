const knex = require('./')

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
    update(id, body) {
      return knex("business").where({id}).update(body)
    },
    list() {
      return knex('business')
    },
  }
}
