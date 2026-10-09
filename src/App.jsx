import React from 'react';
import Navbar from './components/Navbar';
import Notification from './components/Notification'; // Assuming this exists

const App = () => {
  return (
    <div>
      <Navbar />
      <Notification />
      <main>
        <h1>Welcome to Doctor Appointment Booking</h1>
        {/* Routing components go here */}
      </main>
    </div>
  );
};

export default App;
