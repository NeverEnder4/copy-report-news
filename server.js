const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const { morganChalk } = require('./middleware/morganChalk');
require('dotenv').config();

// middlewares
app.use(helmet());
app.use(morganChalk);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

// passport config
require('./passport/passport')(passport);

// routers
const articles = require('./routes/articles');
const register = require('./routes/register');
const login = require('./routes/login');

app.use('/articles', articles);
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

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
