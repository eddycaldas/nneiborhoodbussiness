require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/businesses'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }
};