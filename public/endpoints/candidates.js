const express = require('express');

const candidates = conn => {
  const router = express.Router();

  router.get('/candidates', async (req, res, next) => {
    try {
      const query = 'SELECT * FROM `candidate`';
      const [result] = await conn.query(query);
      res.status(200).json(result);
    } catch(err) {
      return next(err);
    }
  })
  
  return router;
}

module.exports = candidates;