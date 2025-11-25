const appointmentModel = require('../models/Appointment');
const userModel = require('../models/User');

const bookAppointmentController = async (req, res) => {
  try {
    
    const newAppointment = new appointmentModel(req.body);
    await newAppointment.save();

    
    const user = await userModel.findOne({ _id: req.body.userId });
    
    
    if(user) {
      user.unseenNotifications.push({
        type: 'appointment-request-sent',
        message: 'Request for appointment has been sent',
        onClickPath: '/appointments'
      });
      await user.save();
    }

    res.status(200).send({
      message: 'Appointment applied successfully',
      success: true,
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Error booking appointment',
      success: false,
      error,
    });
  }
};

module.exports = { bookAppointmentController };