const express = require('express');
const router = express.Router();

const requests = []

router.get('/here', (req, res) => {
  requests.push({body: req.body, time: Date(Date.now())})
  res.json(requests);
});

router.post('/here', (req, res) => {
  res.json({body: req.body, time: Date(Date.now())});

});

module.exports = router;