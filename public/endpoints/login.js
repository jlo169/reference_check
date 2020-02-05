const express = require('express');

const login = conn => {
  const router = express.Router();

  router.get('/login/:user/:pass', async (req, res, next) => {
    try {
      const user = req.params.user;
      const pass = req.params.pass;
      const userCheckQuery = 'SELECT * FROM `users` WHERE `username`=' + user + ' AND `password`=' + pass;
      const [result] = await conn.query(userCheckQuery, searchParams);

      if (result.id) {
        const output = {
          userExist: true,
          result: result
        }
        res.status(200).json(output);
      } else {
        const output = {
          userExist: false,
          result: 'User matching given username and password does not exist'
        }
        res.status(404).json(output);
      }
    } catch(err) {
      return next(err);
    }
  })

  return router;
}

module.exports = login;