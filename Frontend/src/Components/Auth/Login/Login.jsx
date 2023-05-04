import React from 'react';

function Login() {
  return (
    <div className="login-container">
      <h2>Log In</h2>
        <div className="form-group">
          <label htmlFor="user">Username:</label>
          <input
            type="text"
            id="user"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Log In</button>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;