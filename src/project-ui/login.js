import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/css/style.css'
import '../project-css/login.css'



// import API_BASE_URL from './apiConfig';
const Login = () => {
  const [formData, setFormData] = useState({
    userType: 'Student',
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/user/authenticate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const token = await response.text();

        if (token) {
          localStorage.setItem('authToken', token);
          navigate.push('/feedspage');
        } else {
          console.error('No token found in response:', token);
          alert('Authentication failed. Please try again.');
        }
      } else {
        console.error('Authentication failed with status:', response.status);
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

  };


  return (
    <div className="signin-container">
      <div className="modal-body" id="user-login-form">
        <h2>Login <span> Here!</span></h2>
        <form style={{ "margin-top": "15px" }} className="contact-form form-validate3" noValidate="novalidate">
          <div className="form-group">
            <label className="text-black-200 h6 font-weight-600 mb-2" htmlFor="userType">User Type*</label>
          
            <select className=""
              style={{ "margin-left": "20px" }}
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange} required
            >
              <option value="Admin">Admin</option>
              <option value="Student/Faculty">Student/Faculty</option>
              <option value="Guest">Guest</option>
            </select>
          </div>

          <div className="form-group">
            <label className="text-black-200 h6 font-weight-600 mb-2" htmlFor="email">Username*</label>
            <input className="form-control" type="username" name="username" placeholder="Username" value={formData.username} required autoComplete="off" aria-required="true" />
          </div>

          <div class="row my-3">
            <div class="col-md-6">
              <div className="form-group">
                <label className="text-black-200 h6 font-weight-600 mb-2" htmlFor="password">Password*</label>
                <input type="password" name="password" className="form-control" placeholder="Password" value={formData.password} required autoComplete="off" aria-required="true" />
              </div>
            </div>

          </div>

          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-primary" value="login" id="loginBTN" >Login</button>
          </div>

        </form>
        <p style={{ "margin-top": "15px" }}>
          Not a user? <a href="/signup">Sign Up</a>
        </p>
        <p>
          Forget password? <a href="/reset-password">Reset Password</a>
        </p>
      </div>
    </div>
  );
};

export default Login;



