const {Pool} = require('pg');

const pool = new Pool({
    user: 'gdviosxxgglwxc',
    host: 'ec2-34-205-209-14.compute-1.amazonaws.com',
    database: 'd9mck2v8c6vpv0',
    password: '0624d715669b98338dcd96f40e35f1bb9bf314595ab00a73ba73983fe8f4e080',
    port: 5432,
    ssl: {
      rejectUnauthorized: false,
    }
  });

module.exports = pool;