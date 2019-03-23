const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const loginUser = async (req, res, errors, User) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  // check if email is in database
  if (!user) {
    generateCrypticErrorResponse(errors);
    return res.status(404).json(errors);
  }

  // check password
  const isMatch = await checkPassword(password, user.password);
  if (!isMatch) {
    generateCrypticErrorResponse(errors);
    return res.status(404).json(errors);
  }

  // create jwt payload and set access token cookie
  const token = await generateJWT(user);
  res
    .cookie('access_token', token)
    .json({ success: true, token: `Bearer ${token}` });
};

const checkPassword = async (password, hash) => {
  const isMatch = await bcrypt.compare(password, hash);
  return isMatch;
};

// returns a cryptic error response when condition fails for increased security
const generateCrypticErrorResponse = errors => {
  errors.email = 'Could not authenticate credentials';
  errors.password = 'Could not authenticate credentials';
};

// generate JWT token
const generateJWT = async user => {
  const payload = { id: user.id, name: user.name, avatar: user.avatar };
  const token = await jwt.sign({ payload }, process.env.SECRET, {
    expiresIn: 3600,
  });
  return token;
};

isUserLoggedIn = (req, res, jwt) => {
  const token = req.cookies.access_token;
  let verified;
  jwt.verify(
    token,
    process.env.SECRET,
    { ignoreExpiration: false, maxAge: 3600 },
    (err, decoded) => {
      if (err) throw err;
      verified = decoded.payload;
    },
  );
  return res.json(verified);
};

module.exports = { loginUser, isUserLoggedIn };
