
require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const app = express();
const PORT = process.env.DB_PORT || 3001;

const login = require('./endpoints/login.js');
const candidates = require('./endpoints/candidates.js');
const openJobs = require('./endpoints/openJobs.js');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_TABLE,
  connectionLimit: process.env.DB_CONNLIMIT
});

const db = pool.promise();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', login(db));
app.use('/api', candidates(db));
app.use('/api', openJobs(db));

app.use((err, req, res, next) => {
  res.sendStatus(500);
  console.error(err);
  if (err.fatal) {
    process.exit(1);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});

