const express = require('express')
var bodyParser = require('body-parser')

require('./models')
const Test =  require('./Controllers/test')
const app = express()
const port = 3000

// middel ware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello ATBT CI')
})

app.post('/add',Test.Add_Admin)
app.get('/list',Test.List_Admin)
app.get('/list/:id',Test.Get_Admin)
app.put('/update/:id',Test.Update_Admin)
app.delete('/delete/:id',Test.Delete_Admin)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})