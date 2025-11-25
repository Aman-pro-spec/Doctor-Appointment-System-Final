import React, { useState } from 'react';

const BookingPage = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Form submit hone par ye function chalega
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Backend ko request bhejo (Port 4000 assume kiya hai server.js ke hisab se)
      const res = await fetch('http://localhost:4000/api/v1/user/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Note: Ye dummy IDs hain testing ke liye. 
          // Baad mein hum inhe asli logged-in user aur selected doctor se replace karenge.
          userId: "64e7f8f8f8f8f8f8f8f8f8f8", 
          doctorId: "64e7f8f8f8f8f8f8f8f8f8f9",
          doctorInfo: { name: "Dr. Demo", specialization: "General" },
          userInfo: { name: "Demo Patient", phone: "9999999999" },
          date: date,
          time: time,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert('Appointment Booked Successfully!');
      } else {
        alert(data.message || 'Booking failed');
      }
    } catch (error) {
      console.log(error);
      alert('Error connecting to server');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Date:</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Time:</label>
          <input 
            type="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <button 
          type="submit" 
          style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingPage;