const express = require('express');
const router = express.Router();


router.get('/here', (req, res) => {
  res.json({ make: 'Subaru', model: 'WRX', year: 2020, color: 'blue' });
});

router.post('/here', (req, res) => {
  res.send('Thanks!');
});

module.exports = router;