const pool = require("../client");

const companylocation = async (req, res) => {
  try {
    let location = await pool.query(`select * from company_location`);
    res.json({ statusCode: 200, locations: location.rows });
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = {
  companylocation,
};
