import React, { useState } from 'react';
import styles from './Signup.module.css'; // 👈 import the CSS module

export const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    scholarNumber: '',
    branch: '',
    semester: '',
    email: '',
    password: '',
  });

  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOtpClick = () => {
    // Add OTP generation logic here
    setOtpSent(true);
    console.log("OTP sent to email:", formData.email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup functionality here (e.g., API call to create account)
    console.log("Signing up with:", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Signup</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName" className={styles.label}>First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={styles.input}
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="lastName" className={styles.label}>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={styles.input}
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="scholarNumber" className={styles.label}>Scholar Number</label>
            <input
              type="text"
              id="scholarNumber"
              name="scholarNumber"
              className={styles.input}
              placeholder="Enter your scholar number"
              value={formData.scholarNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="branch" className={styles.label}>Branch</label>
            <input
              type="text"
              id="branch"
              name="branch"
              className={styles.input}
              placeholder="Enter your branch"
              value={formData.branch}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="semester" className={styles.label}>Semester</label>
            <select
              id="semester"
              name="semester"
              className={styles.input}
              value={formData.semester}
              onChange={handleChange}
              required
            >
              <option value="">Select Semester</option>
              {[...Array(8)].map((_, i) => (
                <option key={i} value={i + 1}>Semester {i + 1}</option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.otpButtonContainer}>
            <button type="button" className={styles.otpButton} onClick={handleOtpClick}>
              {otpSent ? "OTP Sent!" : "GET OTP"}
            </button>
          </div>

          <button type="submit" className={styles.submitButton}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};
