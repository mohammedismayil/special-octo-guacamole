const express = require('express');
const logger = require('morgan');
const movies = require('./routes/movies') ;
const users = require('./routes/users');
const bodyParser = require('body-parser');
const mongoose = require('./config/database'); //database configuration
var cors = require('cors')


var jwt = require('jsonwebtoken');
// const app = express();
// app.set('secretKey', 'nodeRestApi'); // jwt secret token

// app.use(logger('dev'));
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({
// extended:true
// }));
// app.use(cors()) // Use this after the variable declaration
// app.use(bodyParser.urlencoded({extended: false}));
// // app.get('/', function(req, res){
// // res.json({"tutorial" : "Build REST API with node.js"});
// // });
// // public route
// app.use('/users', users);
// // private route
// app.use('/movies', validateUser, movies);
// app.use('/listmovies', movies);
// app.get('/favicon.ico', function(req, res) {
//     res.sendStatus(204);
// });
function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
    if (err) {
      res.json({status:"error", message: err.message, data:null});
    }else{
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
  
}
// // express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// // handle 404 error
// app.use(function(req, res, next) {
//  let err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
// // handle errors
// app.use(function(err, req, res, next) {
//  console.log(err);
 
//   if(err.status === 404)
//    res.status(404).json({message: "Not found"});
//   else 
//     res.status(500).json({message: "Something looks wrong :( !!!"});
// });
// app.listen(3000, function(){
//  console.log('Node server listening on port 3000');
// });

// // connection to mongodb
// mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
// // connection to mongodb
// // mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
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
// app.use('/students', studentRoute)

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
const port = process.env.PORT || 3000;
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