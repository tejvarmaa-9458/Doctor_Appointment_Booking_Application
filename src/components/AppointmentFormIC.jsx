import React, { useState } from 'react';

const AppointmentFormIC = () => {
  const [details, setDetails] = useState({ name: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Instant Consultation Booked:", details);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Instant Consultation</h3>
      <input type="text" placeholder="Name" required onChange={(e) => setDetails({...details, name: e.target.value})} />
      <input type="tel" placeholder="Phone Number" required onChange={(e) => setDetails({...details, phone: e.target.value})} />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default AppointmentFormIC;
