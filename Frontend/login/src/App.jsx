import {React }from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterPage from '../Components/Register';
import Login from '../Components/Login';
import Home from './Home';


const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/home" element={<Home />} />

    </Routes>

   </Router>
  );
};

export default App;
