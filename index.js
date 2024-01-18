const express = require('express')
var bodyParser = require('body-parser')
require('./models')
const cors = require('cors')

const Admin_router = require('./Routes/Admin')
const Entite_router = require('./Routes/Entite')
const app = express()
const port = 3000

// middel ware
// parse application/x-www-form-urlencoded
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/admin', Admin_router);
app.use('/entite', Entite_router);





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})