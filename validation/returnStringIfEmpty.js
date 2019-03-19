const { isEmpty } = require('lodash');

module.exports = returnStringIfEmpty = data => {
  return !isEmpty(data) ? data : '';
};
