import React from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom'; // ✅ important!
/*import pancakes from 'images/pancakes.png'; // Make sure the path is correct*/

const Signup = () => {
    const navigate = useNavigate(); // ✅ initialize navigate
  const handleRegister = (e) => {
    e.preventDefault();
    // You can add logic to redirect after register or show success message
    console.log('Registered!');
  };

  return (
    <div className="signup-page">
      <div className="signup-left">
        <div className="gym-background">
        </div>
      </div>

      <div className="signup-right">
        <div className="signup-form-box">
          <h1>Sign up</h1>
          <form onSubmit={handleRegister}>
            <label>First Name</label>
            <input type="text" placeholder="First Name" required />

            <label>Last Name</label>
            <input type="text" placeholder="Last Name" required />

            <label>Email</label>
            <input type="email" placeholder="Email" required />

            <label>Password</label>
            <input type="password" placeholder="Password" required />

            <button type="submit" className="signup-btn">REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;