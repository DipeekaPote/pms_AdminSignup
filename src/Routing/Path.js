import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from '../Logins/AdminLogin/AdminLogin/AdminLogin';

import AdminDash from '../Pages/Dashboards/AdminDashboard/AdminDash';
import Error from '../Error404/Error';
import Sidebar from '../Components/Sidebar/Sidebar';
import Navbar from '../Components/Navbar/Navbar';
import Insights from '../Pages/AllPages/Insights/Insights';
import '../App.css';
import AdminSignup from '../Logins/AdminLogin/AdminSignup/AdminSignUp.js';

import ForgotPassword from "../Logins/AdminLogin/AdminLogin/ForgotPassword";
import ResetPassword from "../Logins/AdminLogin/AdminLogin/ResetPassword";

const Path = () => {
  return (
    <Router>
        
          <Routes>
          <Route exact path="/" element={<AdminLogin />} />
           <Route path='/insights' element={<Insights/>}/>
            <Route path="/adminDash" element={<AdminDash />} />
            <Route path="/signup" element={<AdminSignup/>} />

            <Route path="*" element={<Error />} />
            <Route path="/resetpassword/:id/:token" element={<ResetPassword />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          </Routes>
     
      
    </Router>

  );
}

export default Path;