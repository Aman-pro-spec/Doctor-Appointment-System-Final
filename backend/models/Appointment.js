const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Ye User model se connect karega (Patient)
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor', // Ye Doctor model se connect karega
    required: true,
  },
  doctorInfo: {
    name: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    }
  },
  userInfo: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    }
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'pending', // pending, approved, or cancelled
  },
}, { timestamps: true });

const appointmentModel = mongoose.model('Appointment', appointmentSchema);

module.exports = appointmentModel;