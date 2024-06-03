const Doctor = require('../models/doctor');

const getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.getDoctors();
        res.json(doctors);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getDoctors };
