import React from 'react';

const Navbar = () => {
  const handleLogout = () => {
    sessionStorage.removeItem('auth-token');
    window.location.href = '/login'; // Redirect to login
  };

  return (
    <nav>
      <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
        <li><a href="/appointments">Appointments</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Sign Up</a></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
