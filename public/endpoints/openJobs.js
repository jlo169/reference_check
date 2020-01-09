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

  router.get('/openJobs/:id', async (req, res, next) => {
    try {
      const jobId = req.params.id;
      const getJobQuery = 'SELECT c.id, c.name, c.email, c.linkedIn, c.phone, c.dateCreated\
        FROM `applications` AS a\
        JOIN `candidate` AS c ON a.candidateId = c.id\
        JOIN `openPositions`AS o ON a.openPositionId = o.id\
        WHERE a.openPositionId = ' + jobId;
      const [applicants] = await conn.query(getJobQuery);
      res.status(200).json(applicants);
    } catch(err) {
      return next(err);
    }
  })

  router.post('/openJobs', async (req, res, next) => {
    try {
      const newJob = req.body;
      if (!newJob.content) {
        res.status(400).json({ error: 'Nothing submitted' })
      } else {
        res(201).json(newJob);
      }
    }
  })

  return router;
}

module.exports = openJobs;