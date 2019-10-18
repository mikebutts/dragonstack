const pool = require("../../databasePool");

class GenerationTable {
  static storeGeneration(generation) {
    pool.query(
      "INSERT INTO generation(expiration) VALUES($1)",
      [generation.expiration],
      (err, res) => {
        if (err) return console.log(error);
      }
    );
  }
}

module.exports = GenerationTable;
