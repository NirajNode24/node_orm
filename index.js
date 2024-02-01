const express = require('express')
var bodyParser = require('body-parser')
const multer  = require('multer');


require('./models')
const cors = require('cors')
const Admin_router = require('./Routes/Admin')
const setting_router = require('./Routes/Form_setting')
const Entite_router = require('./Routes/Entity')
const emailRoute = require('./mail/mail')
const Auth_router = require('./Routes/Auth')
const errorHander = require('./middlewares/errorHandler.middleware')
const routeNotFound = require('./middlewares/routeNotfound.middleware')
const authVerify = require('./middlewares/authVerify.middleware')

const app = express()
const port = 3000

// middel ware
// parse application/x-www-form-urlencoded
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// app.use('/admin', authVerify, Admin_router);
app.use('/admin', Admin_router);
app.use('/entity', Entite_router);
app.use('/api', emailRoute);
app.use('/auth', Auth_router)
app.use('/form', setting_router)


// Route to handle file upload

app.get('/', (req, res) => {
  res.send('ATBT 3.1')
})
const storage = require('./utils/store')
const upload = multer({
  storage: storage,
  limits: {
      fileSize: 1000000
  }
})
app.use('/profile', express.static('Public/Images'));

app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file)
  res.status(200).json({
    success: 1,
    profile_url: `http://localhost:3001/profile/${req.file.filename}`
})
});



app.use(errorHander);
app.use(routeNotFound);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
