const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static('public'))

const routes = {
  business: require("./routes/business")
}

app.use("/business", routes.business)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))