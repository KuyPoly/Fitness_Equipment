import React from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom'; // ✅ important!
import Footer from "../../component/footer/footer";

const Signup = () => {
    const navigate = useNavigate(); // ✅ initialize navigate
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const userData = {
      firstName: form[0].value,
      lastName: form[1].value,
      email: form[2].value,
      signupDate: new Date().toISOString(),
      lastLogin: new Date().toISOString()
      // Note: In production, never store passwords in localStorage
    };
    
    // Save user data and mark as logged in
    localStorage.setItem('personalInfo', JSON.stringify(userData));
    localStorage.setItem('userLoggedIn', 'true');
    console.log('User registered and logged in');
    navigate('/profile'); // Redirect to profile after registration
  };

  return (
    <div>
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
      <div className="footer-space"></div>
      <Footer />
    </div>
  );
};

export default Signup;
