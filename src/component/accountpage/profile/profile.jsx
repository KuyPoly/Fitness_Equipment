import React, { useState, useEffect } from 'react';
import './profile.css';
import { useNavigate } from 'react-router-dom';
 

const Profile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
  });

  const [message, setMessage] = useState('');

  // ✅ Redirect if not logged in
  useEffect(() => {
    const user = localStorage.getItem('userLoggedIn');
    if (!user) {
      navigate('/log-in');
    }
  }, [navigate]);

  // ✅ Load from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('personalInfo');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!formData.firstName || !formData.email) {
      setMessage('❗️ First name and email are required.');
      return;
    }

    localStorage.setItem('personalInfo', JSON.stringify(formData));
    setMessage('✅ Profile updated successfully!');

    setTimeout(() => setMessage(''), 3000);
  };

  const handleClear = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
    });
    localStorage.removeItem('personalInfo');
    setMessage('❌ Profile cleared.');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div>
      <div className="profile-page">
        <h1>Personal Information</h1>
        <p className="section-title">Account Information</p>

        {/* ✅ Success/Error message */}
        {message && <div className="message-box">{message}</div>}

        <form className="profile-form" onSubmit={handleUpdate}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Address</label>
            <input
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="button-group">
            <button type="submit" className="update-btn">Update Profile</button>
            <button type="button" className="clear-btn" onClick={handleClear}>Clear All</button>
          </div>
        </form>
      </div>
     
    </div>
  );
};

export default Profile;
