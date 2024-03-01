import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleLogin = (e) => {
   e.preventDefault()
   
   axios
   .post("https://jwt-auth-i9r8.onrender.com/api/login", { email, password })
   .then(result => {
     console.log(result);
     navigate("/home");
   })
   .catch(err => console.log(err));
};

  return (
    <>
    <h2>Login</h2>
    <div className='d-flex-box justify-content-center align-items-center  '>
    {/* <div className="bg-dark p-3 rounded w-25"> */}
      
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <label>Password:</label>
        <input type="password" placeholder='password' autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
          <br /> <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>

        {/* <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        */}
      </form>
      </div>
      </>
        // </div>
   
  );
};

export default Login;
