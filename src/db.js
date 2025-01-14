const { query, text } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '123456',
  host: 'localhost',
  port: 5432,
  database: 'express-api-db',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
