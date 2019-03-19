const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();
const passport = require('passport');

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const url = `https://newsapi.org/v2/everything?q=space&apiKey=${
      process.env.HACKER_NEWS_API_KEY
    }`;
    axios
      .get(url)
      .then(response => res.json(response.data))
      .catch(console.log);
  },
);

router.get(
  '/:type/:input',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { input } = req.params;
    let { type } = req.params;
    type = type === 'true' ? 'everything' : 'top-headlines';
    const url = `https://newsapi.org/v2/${type}?q=${input}&apiKey=${
      process.env.HACKER_NEWS_API_KEY
    }`;
    axios
      .get(url)
      .then(response => res.json(response.data))
      .catch(console.log);
  },
);

module.exports = router;
