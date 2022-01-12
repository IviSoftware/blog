const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'blog',
    password: 'ivi1234',
    port: 5432,
  });

module.exports = pool;