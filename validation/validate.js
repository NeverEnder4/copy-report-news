const Validator = require('validator');
const { isEmpty } = require('lodash');

module.exports = {
  url(url, name, errors) {
    if (!isEmpty(url)) {
      if (!Validator.isURL(url)) {
        errors[name] = 'Not a valid URL';
      }
    }
  },
  emptyField(input, name, errors) {
    if (Validator.isEmpty(input)) {
      errors[name] = 'Field is required';
    }
  },

  length(input, name, min, max, errors) {
    if (!Validator.isLength(input, { min, max })) {
      errors[name] = `Must be between ${min} and ${max} characters`;
    }
  },

  checkEmail(email, name, errors) {
    if (!Validator.isEmail(email)) {
      errors[name] = 'Email is invalid';
    }
  },
  match(matcher, input, name, errors) {
    if (!Validator.equals(matcher, input)) {
      errors[name] = 'Fields must match';
    }
  },
};
