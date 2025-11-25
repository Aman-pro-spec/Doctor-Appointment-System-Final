const express = require('express');
const { bookAppointmentController } = require('../controllers/appointmentCtrl');
// const authMiddleware = require('../middleware/authMiddleware'); 

const router = express.Router();

router.post('/book-appointment', bookAppointmentController); 



module.exports = router;