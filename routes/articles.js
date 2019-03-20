const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();
const passport = require('passport');
const validateSaveArticle = require('../validation/articles');
const mongoose = require('mongoose');

const Article = require('../models/Article');

const { saveArticle } = require('../controllers/articles');

router.get(
  '/:type/:input?/:country?/:category?/:sources?/:language?/:sortBy?',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    let { input, country, category, sources, language, sortBy } = req.params;
    input ? (input = `q=${input}`) : '';
    sources ? (sources = `sources=${sources}`) : '';
    language ? (language = `language=${language}`) : '';
    sortBy ? (sortBy = `sortBy=${sortBy}`) : '';
    country ? (country = `country=${country}`) : '';
    category ? (category = `category=${category}`) : '';

    let { type } = req.params;
    let url;
    type = type === 'true' ? 'everything' : 'top-headlines';
    if (type === 'everything')
      url = `https://newsapi.org/v2/${type}?${input}&${sources}&${language}&${sortBy}&apiKey=${
        process.env.HACKER_NEWS_API_KEY
      }`;
    else if (type === 'top-headlines')
      url = `https://newsapi.org/v2/${type}?${input}&${country}&${category}&${sources}&apiKey=${
        process.env.HACKER_NEWS_API_KEY
      }`;

    axios
      .get(url)
      .then(response => {
        res.json(response.data);
      })
      .catch(console.log);
  },
);

router.post('/saved', (req, res) => {
  const { userId } = req.body;
  Article.find({ users: mongoose.Types.ObjectId(userId) })
    .then(userArticles => {
      if (!userArticles.length) {
        errors.article = "Looks like you haven't saved any articles yet!";
        return res.status(400).json(errors);
      }
      return res.json(userArticles);
    })
    .catch(err => console.log);
});

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSaveArticle(req.body);
    if (!isValid) return res.status(400).json(errors);
    saveArticle(req, res, errors, Article, mongoose);
  },
);

module.exports = router;
