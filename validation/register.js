const returnStringIfEmpty = require('./returnStringIfEmpty');

const { isEmpty } = require('lodash');
const { length, emptyField, checkEmail, match } = require('./validate');

const validateRegisterInput = data => {
  let errors = {};

  const name = returnStringIfEmpty(data.name);
  const email = returnStringIfEmpty(data.email);
  const password1 = returnStringIfEmpty(data.password1);
  const password2 = returnStringIfEmpty(data.password2);

  // validate all form data
  // name
  length(name, 'name', 2, 30, errors);
  emptyField(name, 'name', errors);
  // email
  checkEmail(email, 'email', errors);
  emptyField(email, 'email', errors);

  // password1
  length(password1, 'password', 6, 30, errors);
  emptyField(password1, 'password', errors);
  // password 2
  emptyField(password2, 'passwordMatch', errors);
  match(password1, password2, 'passwordMatch', errors);

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateRegisterInput;
