import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      sessionStorage.setItem('auth-token', data.token);
      console.log("Login API Response:", data);
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setCredentials({...credentials, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={(e) => setCredentials({...credentials, password: e.target.value})} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
