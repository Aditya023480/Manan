const pool = require('./db.js')

async function testDB() {
  const res = await pool.query('SELECT NOW()')
  console.log(res.rows)
}

testDB()