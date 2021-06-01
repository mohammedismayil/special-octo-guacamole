let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
// let dbConfig = require('./database/db');

// Express Route
// const studentRoute = require('../backend/routes/student.route')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/special', {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());


app.get("/url", (req, res, next) => {
  res.json([{"isbn": "123-456-222",  
  "author": 
     {
       "lastname": "Doe",
       "firstname": "Jane"
     },
 "editor": 
     {
       "lastname": "Smith",
       "firstname": "Jane"
     },
   "title": "The Ultimate Database Study Guide",  
   "category": ["Non-Fiction", "Technology"]
  }]);
 });
// PORT
const port = process.env.PORT || 4000;
const servername = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});