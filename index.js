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
const CustomFormRouter = require('./Routes/CustomForm')
const UserRouter = require('./Routes/User')
const TeamRouter = require('./Routes/Team')
const BMeetRouter = require('./Routes/BMeet')




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
app.use('/user', UserRouter);
app.use('/team', TeamRouter);
app.use('/api', emailRoute);
app.use('/auth', Auth_router)
app.use('/form', setting_router)
app.use('/Custom',CustomFormRouter)
app.use('/boardmeet',BMeetRouter)


// Route to handle file upload

app.get('/', (req, res) => {
  res.send('ATBT 3.5qe')
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
    profile_url: `https://atbtmain.teksacademy.com/profile/${req.file.filename}`
})
});
// Create a connection to the database local
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root123',
//   database: 'ATBT_test'
// });



// // Create a connection to the database rds
// const connection = mysql.createConnection({
//   host: 'atbt-db.cwuyjszxxfxc.us-east-1.rds.amazonaws.com',
//   user: 'rootadmin',
//   password: 'rootadmin',
//   database: 'ATBT_test'
// });

// // Connect to the database
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to database: ' + err.stack);
//     return;
//   }
//   console.log('Connected to database as id ' + connection.threadId);
// });

// Add_data controller function



// app.post('/userdata', (req, res) => {
//   const data = req.body;
//   console.log(data)
//   // Insert data into the entitydata table
//   mycon.query('INSERT INTO usersdata SET ?', data, (err, result) => {
//     if (err) {
//       console.error('Error inserting data: ' + err.stack);
//       res.status(500).send('Error inserting data');
//       return;
//     }
//     console.log('Inserted ' + result.affectedRows + ' row(s)');
//     res.status(200).send('Data inserted successfully');
//   });
// });

// app.post('/bmdata', (req, res) => {
//   const data = req.body;
//   console.log(data)
//   // Insert data into the entitydata table
//   connection.query('INSERT INTO bmeetdata SET ?', data, (err, result) => {
//     if (err) {
//       console.error('Error inserting data: ' + err.stack);
//       res.status(500).send('Error inserting data');
//       return;
//     }

//     console.log('Inserted ' + result.affectedRows + ' row(s)');
//     res.status(200).send('Data inserted successfully');
//   });
// });

// app.post('/tmdata', (req, res) => {
//   const data = req.body;
//   console.log(data)
//   // Insert data into the entitydata table
//   connection.query('INSERT INTO tmeetdata SET ?', data, (err, result) => {
//     if (err) {
//       console.error('Error inserting data: ' + err.stack);
//       res.status(500).send('Error inserting data');
//       return;
//     }

//     console.log('Inserted ' + result.affectedRows + ' row(s)');
//     res.status(200).send('Data inserted successfully');
//   });
// });


app.use(errorHander);
app.use(routeNotFound);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
