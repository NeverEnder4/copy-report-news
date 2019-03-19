const express = require('express');
const router = express.Router();

const validateLoginInput = require('../validation/login');

const loginUser = require('../controllers/login');

const User = require('../models/User');

router.post('/', (req, res) => {
  // validate login input
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) return res.status(400).json(errors);

  // find user by email
  loginUser(req, res, errors, User);
});

module.exports = router;
