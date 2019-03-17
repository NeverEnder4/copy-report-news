const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/', (req, res) => {
  const url = `https://newsapi.org/v2/everything?q=space&apiKey=${
    process.env.HACKER_NEWS_API_KEY
  }`;
  axios
    .get(url)
    .then(response => res.json(response.data))
    .catch(console.log);
});

router.get('/:type/:input', (req, res) => {
  console.log(req.params);
  const { input } = req.params;
  let { type } = req.params;
  console.log(type, input);
  type = type === 'true' ? 'everything' : 'top-headlines';
  console.log(type);
  const url = `https://newsapi.org/v2/${type}?q=${input}&apiKey=${
    process.env.HACKER_NEWS_API_KEY
  }`;
  console.log(url);
  axios
    .get(url)
    .then(response => res.json(response.data))
    .catch(console.log);
});

module.exports = router;
