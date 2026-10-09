import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({ role: '', name: '', email: '', phone: '', password: '' });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log("Registration API Response:", data);
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Role" onChange={(e) => setFormData({...formData, role: e.target.value})} />
      <input type="text" placeholder="Name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
      <input type="tel" placeholder="Phone" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
