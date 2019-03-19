const gravatar = require('gravatar');
const bcrypt = require('bcrypt');

const registerUser = async (req, res, errors, User) => {
  // search db for user with requested email
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    errors.email = 'An account with that email address is already registered';
    return res.status(400).json(errors);
  } else {
    // generate avatar and hashed password
    const avatar = await getAvatar(req.body.email);
    const hash = await generateHash(req.body.password1);

    // create new user from model
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      avatar,
      password: hash,
    });

    // save user to database
    saveUser(newUser, res);
  }
};

// helper functions
const getAvatar = async email => {
  const avatar = await gravatar.url(email, {
    s: '200',
    r: 'pg',
    d: 'mm',
  });
  return avatar;
};

const generateHash = async password => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

const saveUser = async (newUser, res) => {
  const user = await newUser.save();
  if (!user) {
    error.registration = 'Registration failed';
    return res.status(400).json(error);
  } else {
    res.json(user);
  }
};

module.exports = registerUser;
