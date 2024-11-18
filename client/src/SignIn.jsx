import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

  // State to store form data
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', { email, password})
    .then((result) => {
      console.log(result);
      if(result.data=== "Success"){

        navigate('/home');
      }
    })
    .catch((err) => {
      console.error(err);
      setError('Login failed. Please try again.');
    });
  };


  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="p-4 bg-white shadow rounded" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2">
            Sign In
          </button>
            <p>Haven't an Account?</p>
          <Link to='/register' className='btn w-100 border'>Register</Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
