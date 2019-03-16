const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/', (req, res) => {
  const url = `https://newsapi.org/v2/top-headlines?q=bitcoin&apiKey=${
    process.env.HACKER_NEWS_API_KEY
  }`;
  axios
    .get(url)
    .then(response => res.json(response.data))
    .catch(console.log);
});

module.exports = router;
