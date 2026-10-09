import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Booked:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Book Appointment</h3>
      <input type="text" placeholder="Name" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
      <input type="tel" placeholder="Phone Number" required onChange={(e) => setFormData({...formData, phone: e.target.value})} />
      <input type="date" required onChange={(e) => setFormData({...formData, date: e.target.value})} />
      <input type="time" required onChange={(e) => setFormData({...formData, time: e.target.value})} />
      <button type="submit">Confirm Appointment</button>
    </form>
  );
};

export default AppointmentForm;
