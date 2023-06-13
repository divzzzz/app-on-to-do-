const {createPool} = require('mysql2/promise');

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '@Divya15',
  database: 'todolist',
  namedPlaceholders: true,
});

module.exports = {
  pool,
};

