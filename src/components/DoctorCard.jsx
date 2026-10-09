import React, { useState } from 'react';

const DoctorCard = ({ name, specialty }) => {
  const [isBooked, setIsBooked] = useState(true); // Mocking an existing booking

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      setIsBooked(false);
      console.log("Appointment cancelled for", name);
    }
  };

  return (
    <div className="doctor-card">
      <h4>{name || "Dr. Smith"}</h4>
      <p>{specialty || "Cardiologist"}</p>
      {isBooked ? (
        <button onClick={handleCancel}>Cancel Appointment</button>
      ) : (
        <button onClick={() => setIsBooked(true)}>Book Appointment</button>
      )}
    </div>
  );
};

export default DoctorCard;
