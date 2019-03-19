const express = require('express');
const router = express.Router();
const validateRegisterInput = require('../validation/register');
const registerUser = require('../controllers/register');

const User = require('../models/User');

router.post('/', (req, res) => {
  // validate input
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) return res.status(400).json(errors);
  // register the user
  registerUser(req, res, errors, User);
});

module.exports = router;
