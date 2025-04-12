import React from 'react';
import './accountpage.css';
import { useNavigate } from 'react-router-dom'; 


const AccountPage = () => {
    const navigate = useNavigate(); 
  return (
    <div className="account-page">
      <div className="left-panel">
        <div className="gym-background">
        </div>
      </div>

      <div className="right-panel">
        <div className="login-box">
          <h1>Log in</h1>
          <form>
            <label>Email</label>
            <input type="email" placeholder="Email" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <button type="submit" className="login-btn">LOGIN</button>
            <a href="#" className="forgot-password">Forgot your password?</a>
          </form>

          <div className="new-customer">
            <h2>New customer ?</h2>
            <p><br />
              Sign up for an account to take advantage of order history as well
              as pre-filled forms during checkout on subsequent orders.
            </p><br />
            <button className="register-btn" onClick={() => navigate('/signup')}>REGISTER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
