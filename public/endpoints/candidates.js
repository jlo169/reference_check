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

  router.post('/candidates', async (req, res, next) => {
    try {
      const { name, email, linkedIn, phone, dateCreated, jobId } = req.body;
      const query = 'INSERT INTO `candidate`(`id`, `name`, `email`, `linkedIn`, `phone`, `dateCreated`)\
        VALUES ( NULL, ?, ?, ?, ?, ?)';
      const values = [name, email, linkedIn, phone, dateCreated];
      const [candidateResult] = await conn.query(query, values);
      if (candidateResult.insertId) {
        const applicationQuery = 'INSERT INTO `applications` VALUES (NULL, ?, ?)';
        const applicationValues = [jobId, candidateResult.insertId];
        await conn.query(applicationQuery, applicationValues);
        res.status(201).end();
      }
    } catch(err) {
      return next(err);
    }
  })
  
  return router;
}

module.exports = candidates;