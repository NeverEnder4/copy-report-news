const returnStringIfEmpty = require('./returnStringIfEmpty');

const { isEmpty } = require('lodash');
const { emptyField, checkEmail } = require('./validate');

const validateLoginInput = data => {
  let errors = {};

  const email = returnStringIfEmpty(data.email);
  const password = returnStringIfEmpty(data.password);

  // validate all form data
  // email
  checkEmail(email, 'email', errors);
  emptyField(email, 'email', errors);

  // password
  emptyField(password, 'password', errors);

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateLoginInput;
