import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .post("http://localhost:3005/api/register", { name, email, password })
    .then(result => {
      console.log(result);
      navigate("/login");
    })
    .catch(err => console.log(err));
};

  return (
      <>
    <h1>Register</h1>
    <div className='d-flex-box justify-content-center align-items-center bg-'>
      {/* <div className="bg-dark p-3 rounded w-25"> */}
      {/* <h2>Register</h2> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">

        <label>Name:</label>
        <input type="name" placeholder='enter name'  className='form-control rounded-0' onChange={(e) => setName(e.target.value)} />

        <label>Email:</label>
        <input type="email" placeholder='enter email' name="email" className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" placeholder='enter password' autoComplete="off" name="password" className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)} />
        <br /> <br />

        <button type="button" onClick={handleSubmit}>
          Register
        </button>
 
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        </div>
     
      </form>
      </div>
  
    </>
 
  );
};

export default RegisterPage;
