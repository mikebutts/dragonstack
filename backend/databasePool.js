const { Pool } = require("pg");
const databaseConfig = require("./secrets/databaseConfig");

const pool = new Pool(databaseConfig);

module.exports = pool;

pool.query("SELECT * FROM generation", (err, res) => {
  if (err) return console.log("error", err);

  console.log("response", res.rows);
});
