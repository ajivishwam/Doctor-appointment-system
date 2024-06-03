const pool = require('../config/database');

const getDoctors = async () => {
    const result = await pool.query('SELECT * FROM doctors');
    return result.rows;
};

module.exports = { getDoctors };
