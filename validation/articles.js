const returnStringIfEmpty = require('./returnStringIfEmpty');

const { isEmpty } = require('lodash');
const { emptyArticle, emptyUserId } = require('./validate');

const validateSaveArticle = data => {
  let errors = {};

  const article = returnStringIfEmpty(data.article);
  const userId = returnStringIfEmpty(data.userId);

  emptyArticle(article, 'article', errors);

  emptyUserId(userId, 'article', errors);

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateSaveArticle;
