const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');


//LOAD ENV VARS
dotenv.config({
  path: './config/config.env'
});

//CONNECT TO DB
connectDB();

//ROUTE FILES
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');
const auth = require('./routes/auth');
const users = require('./routes/users');
const reviews = require('./routes/reviews');

const app = express();

//BODY PARSER
app.use(express.json());

//COOKIE PARSER
app.use(cookieParser());

//DEV LOGGING MIDDLEWARE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//FILE UPLOADING
app.use(fileupload());

//SANITIZE DATA
app.use(mongoSanitize());

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

//MOUNT ROUTERS
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);
app.use('/api/v1/reviews', reviews);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue)
);

//HANDLE UNHANDLED PROMISE REJECTIONS
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  //CLOSE SERVER AND EXIT PROCESS
  server.close(() => process.exit(1));
});