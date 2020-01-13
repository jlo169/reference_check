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
      const { jobTitle, focusArea, salary, dateCreated, jobMission, desiredOutcomes1, desiredOutcomes2, desiredOutcomes3 } = req.body;
      const targetSkills = JSON.stringify(req.body.targetSkills);
      let postQuery = 'INSERT INTO `openPositions`(`id`, `companyId`, `jobTitle`, `focusArea`, `salary`, `dateCreated`, `jobMission`, `desiredOutcome1`, `desiredOutcome2`, `desiredOutcome3`, `targetSkills`)\
         VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      let values = [1, jobTitle, focusArea, salary, dateCreated, jobMission, desiredOutcomes1, desiredOutcomes2, desiredOutcomes3, targetSkills];
      const [result] = await conn.query(postQuery, values);
      const insertedJob = {
        id: result.insertId,
        companyId: 1,
        jobTitle: jobTitle, 
        focusArea: focusArea, 
        salary: salary, 
        dateCreated: dateCreated,
        jobMission: jobMission,
        desiredOutcome1: desiredOutcomes1,
        desiredOutcome2: desiredOutcomes2,
        desiredOutcome3: desiredOutcomes3, 
        targetSkills: targetSkills
      }
      const output = {
        sucess: true,
        data: {
          result: result,
          insertedJob: insertedJob
        }
      }
      res.status(201).json(output);
    } catch(err) {
      return next(err);
    }
  })

  return router;
}

module.exports = openJobs;

// {
//   id: result.insertId,
//   companyId: 1,
//   jobTitle: jobTitle, 
//   focusArea: focusArea, 
//   salary: salary, 
//   dateCreated: dateCreated,
//   jobMission: jobMission,
//   desiredOutcome1: desiredOutcomes1,
//   desiredOutcome2: desiredOutcomes2,
//   desiredOutcome3: desiredOutcomes3, 
//   targetSkills: targetSkills
// }