const express = require('express');

const openJobs = conn => {
  const router = express.Router();

  router.get('/openJobs', async (req, res, next) => {
    try {
      const query = 'SELECT * FROM `openPositions`';
      const [result] = await conn.query(query);
      res.status(200).json(result);
    } catch(err) {
      return next(err);
    }
  })

  return router;
}

module.exports = openJobs;