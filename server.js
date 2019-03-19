const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();

// middlewares
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

// passport config
require('./passport/passport')(passport);

// routers
const news = require('./routes/news');
const register = require('./routes/register');
const login = require('./routes/login');

app.use('/news', news);
app.use('/register', register);
app.use('/login', login);

//connect to MongoDB
mongoose
  .connect(process.env.DB_URI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
